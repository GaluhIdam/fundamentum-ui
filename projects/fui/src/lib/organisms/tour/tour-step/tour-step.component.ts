import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PopoverComponent } from '../../../templates/popover/popover.component';
import { CommonModule } from '@angular/common';
import { ButtonIconComponent } from '../../../molecules/button-icon/button-icon.component';
import { ButtonEmptyComponent } from '../../../atoms/button-empty/button-empty.component';
import { TourComponent } from '../tour.component';
import { TextComponent } from '../../../atoms/text/text.component';
import { Color, Size } from '../../../types';

/**
 * The TourStepComponent component
 * @usage
 * ```html
 * <fui-tour-step
 *  [stepNumber]="1"
 *  [title]="'Title Tour'"
 *  [position]="'bottom'"
 *  [align]="'start'"
 * >
 *  <div tour-step-content>
 *    Content step tour
 *  </div>
 * </fui-tour-step>
 * ```
 * <example-url>http://localhost:4200/organisms/tour</example-url>
 */

@Component({
  selector: 'fui-tour-step',
  standalone: true,
  templateUrl: './tour-step.component.html',
  styleUrl: './tour-step.component.scss',
  imports: [
    CommonModule,
    PopoverComponent,
    ButtonIconComponent,
    ButtonEmptyComponent,
    TextComponent,
  ],
})
export class TourStepComponent implements OnChanges {
  @Input({ required: true }) stepNumber!: number;
  @Input() title: string = '';
  @Input() position: 'left' | 'right' | 'top' | 'bottom' = 'bottom';
  @Input() align: 'start' | 'center' | 'end' = 'center';
  @Input() completeStep: boolean = false;
  @Input() displaySkipTourText: boolean = true;
  @Input() skipTourText: string = 'Skip Tour';
  @Input() skipTourSize: Size = 'sizes';
  @Input() skipTourColor: Color = 'text';
  @Input() displayNextFinishStepText: boolean = true;
  @Input() nextStepText: string = 'Next';
  @Input() finishStepText: string = 'Finish';
  @Input() nextFinishTourSize: 's' | 'm' | 'l' = 'm';
  @Input() nextFinishTourColor: Color = 'primary';

  constructor(public TourComponent: TourComponent) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['completeStep']?.currentValue) {
      this.nextStep();
    }
  }

  nextStep() {
    this.TourComponent.nextStep();
  }

  endTour() {
    this.TourComponent.endTour();
  }
}
