import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FlexGroupComponent} from "../../templates/flex/flex-group.component";
import {IconsComponent} from "../../atoms/icons/icons.component";
import {InputFieldComponent} from "../../molecules/form-control-layout/input-field/input-field.component";
import {PopoverComponent} from "../../templates/popover/popover.component";
import {MinuteInterval, TimeFormat} from "../../types";
import {FormControl} from "@angular/forms";
import dayjs from "dayjs";
import {NgForOf} from "@angular/common";
import customParseFormat from "dayjs/plugin/customParseFormat";

@Component({
  selector: 'fui-time-selection',
  standalone: true,
  imports: [
    FlexGroupComponent,
    IconsComponent,
    InputFieldComponent,
    PopoverComponent,
    NgForOf
  ],
  templateUrl: './time-selection.component.html',
  styleUrl: './time-selection.component.scss'
})
export class TimeSelectionComponent implements OnInit {

  @Input() timeFormat: TimeFormat = "24h";
  @Input() minuteInterval: MinuteInterval = "30 minutes";
  @Input() timeFormControl: FormControl = new FormControl();

  @Input() isInvalid: boolean = false;
  @Output() isInvalidChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  placeholder: string = "";
  selectedTime: dayjs.Dayjs | null = null;
  timeOptions: Array<{time: dayjs.Dayjs, selected: boolean}> = [];

  ngOnInit(): void {
    this.placeholder = (this.timeFormat === "12h"? 'HH:MM AM': 'HH:MM');
    this.selectedTime = dayjs();
    this.generateTimeOptions();
  }

  isTimeSelected(time: dayjs.Dayjs): boolean {
    if (!this.selectedTime) {
      return false;
    }
    let interval: number = this.generateMinuteInterval();
    const roundedMinute: number = Math.trunc(this.selectedTime.minute() / interval) * interval;
    const isSameHour = time.hour() === this.selectedTime.hour();
    const isSameMinute = time.minute() === roundedMinute;
    return isSameHour && isSameMinute;
  }

  generateTimeOptions(): void {
    this.timeOptions = [];
    let interval: number = this.generateMinuteInterval();
    const minutesSize = 60 / interval;
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < minutesSize; j++) {
        const timeOption = dayjs().hour(i).minute(j * interval);
        this.timeOptions.push({time: timeOption, selected: this.isTimeSelected(timeOption)});
      }
    }
  }

  generateMinuteInterval(): number {
    let interval: number = 30;
    if (this.minuteInterval === "1 minute") {
      interval = 1;
    } else if (this.minuteInterval === "5 minutes") {
      interval = 5;
    } else if (this.minuteInterval === "10 minutes") {
      interval = 10;
    } else if (this.minuteInterval === "15 minutes") {
      interval = 15;
    }
    return interval;
  }

  formatTime(date: dayjs.Dayjs): string {
    if (this.timeFormat === "12h") {
      return date.format("hh:mm A");
    } else {
      return date.format("HH:mm");
    }
  }

  selectTime(time: dayjs.Dayjs): void {
    this.selectedTime = time;
    this.generateTimeOptions();
    const formatedTime: string = this.formatTime(this.selectedTime);
    this.timeFormControl = new FormControl(formatedTime);
    this.isInvalid = false;
    this.isInvalidChange.emit(this.isInvalid);
    this.onChange.emit(this.timeFormControl.value);
  }

  changeTextInput(event: any): void {
    const inputValue = event.target.value;
    this.isInvalid = !this.validateDateInput(inputValue);
    this.isInvalidChange.emit(this.isInvalid);
    if (!this.isInvalid) {
      let format: string = (this.timeFormat === "12h"? 'hh:mm A': 'HH:mm');
      this.selectedTime = dayjs(inputValue, format, true);
      this.onChange.emit(this.timeFormControl.value);
    }
  }

  validateDateInput(inputValue: string): boolean {
    let format: string = (this.timeFormat === "12h"? 'hh:mm A': 'HH:mm');
    return dayjs(inputValue, format, true).isValid();
  }

}
