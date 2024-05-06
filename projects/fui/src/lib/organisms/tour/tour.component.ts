import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { TourStepComponent } from './tour-step/tour-step.component';
import { BehaviorSubject } from 'rxjs';

/**
 * The TourComponent component
 * @usage
 * ```html
 * <fui-tour
 *  [totalStep]="2"
 *  [isStartTour]="isStartTour"
 *  (isTourFinished)="handleTourFinished($event)"
 * >
 *  <fui-tour-step> </fui-tour-step>
 *  <fui-tour-step> </fui-tour-step>
 * </fui-tour>
 * ```
 * <example-url>http://localhost:4200/organisms/tour</example-url>
 */

@Component({
  selector: 'fui-tour',
  standalone: true,
  imports: [],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss',
})
export class TourComponent implements OnChanges {
  @Input({ required: true }) totalStep: number = 0;
  @Input() isStartTour: boolean = false;
  @Output() isTourFinished: EventEmitter<boolean> = new EventEmitter(false);

  @ContentChildren(TourStepComponent, { descendants: true })
  tourContents!: QueryList<TourStepComponent>;

  activeStep: BehaviorSubject<number> = new BehaviorSubject(0);

  ngOnChanges(changes: SimpleChanges): void {
    const isStart = changes?.['isStartTour']?.currentValue;
    if (isStart) {
      this.startTour();
    }
  }

  startTour() {
    this.activeStep.next(1);
  }

  endTour() {
    this.activeStep.next(0);
    this.isTourFinished.emit(true);
  }

  nextStep() {
    if (this.activeStep.value === this.totalStep) {
      this.endTour();
    } else {
      this.activeStep.next(this.activeStep.value + 1);
    }
  }
}
