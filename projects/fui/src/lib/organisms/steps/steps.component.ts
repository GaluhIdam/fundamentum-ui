import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { Color, Icon, Size, StepProps, StepStatus } from '../../types';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../../atoms/text/text.component';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { StepContentComponent } from './step-content/step-content.component';

/**
 * The StepsComponent
 * @usage
 * ```html
 * <fui-steps [steps]="steps">
 * </fui-steps>
 * ```
 * <example-url>http://localhost:4200/organisms/steps</example-url>
 */

@Component({
  selector: 'fui-steps',
  standalone: true,
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss',
  imports: [CommonModule, TextComponent, IconsComponent],
})
export class StepsComponent {
  @Input() steps: StepProps[] = [];
  @Input() direction: 'horizontal' | 'vertical' = 'vertical';
  @Input() conditionDisplay: 'all' | 'current' = 'all';
  @Input() activeStepId: string = '';
  @Input() stepSize: Size = 'sizedefault';
  @Output() selectedStep: EventEmitter<StepProps> = new EventEmitter();

  @ContentChildren(StepContentComponent)
  stepContents!: QueryList<StepContentComponent>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  getStepContents(stepId: string): StepContentComponent[] {
    return this.stepContents.filter((contentStep) => contentStep.id === stepId);
  }

  getStepColor(
    status: StepStatus,
    color?: {
      [key in StepStatus]?: Color;
    }
  ) {
    let stepColor: Color = 'text';
    switch (status) {
      case StepStatus.CURRENT:
        stepColor = color?.current ? color?.current : 'ghost';
        break;

      case StepStatus.COMPLETE:
        stepColor = color?.complete ? color?.complete : 'ghost';
        break;

      case StepStatus.INCOMPLETE:
        stepColor = color?.incomplete ? color?.incomplete : 'ink';
        break;

      case StepStatus.WARNING:
        stepColor = color?.warning ? color?.warning : 'ink';
        break;

      case StepStatus.ERROR:
        stepColor = color?.error ? color?.error : 'ghost';
        break;

      case StepStatus.DISABLED:
        stepColor = color?.disabled ? color?.disabled : 'disabled';
        break;

      default:
        stepColor = 'ink';
        break;
    }

    return stepColor;
  }

  getStepBackground(
    status: StepStatus,
    color?: {
      [key in StepStatus]?: Color;
    }
  ) {
    let stepBackground: Color = 'ghost';
    switch (status) {
      case StepStatus.CURRENT:
        stepBackground = color?.current ? color?.current : 'primary';
        break;

      case StepStatus.COMPLETE:
        stepBackground = color?.complete ? color?.complete : 'success';
        break;

      case StepStatus.INCOMPLETE:
        stepBackground = color?.incomplete ? color?.incomplete : 'ghost';
        break;

      case StepStatus.WARNING:
        stepBackground = color?.warning ? color?.warning : 'warning';
        break;

      case StepStatus.ERROR:
        stepBackground = color?.error ? color?.error : 'danger';
        break;

      case StepStatus.DISABLED:
        stepBackground = color?.disabled ? color?.disabled : 'disabled';
        break;

      default:
        stepBackground = 'ghost';
        break;
    }

    return 'step-background-' + stepBackground;
  }

  getStepIcon(
    status: StepStatus,
    icon?: {
      [key in StepStatus]?: Icon;
    }
  ) {
    let stepIcon: Icon = 'dot';
    switch (status) {
      case StepStatus.CURRENT:
        stepIcon = icon?.current ? icon?.current : 'dot';
        break;

      case StepStatus.COMPLETE:
        stepIcon = icon?.complete ? icon?.complete : 'check';
        break;

      case StepStatus.INCOMPLETE:
        stepIcon = icon?.incomplete ? icon?.incomplete : 'dotInCircle';
        break;

      case StepStatus.WARNING:
        stepIcon = icon?.warning ? icon?.warning : 'alert';
        break;

      case StepStatus.ERROR:
        stepIcon = icon?.error ? icon?.error : 'cross';
        break;

      case StepStatus.DISABLED:
        stepIcon = icon?.disabled ? icon?.disabled : 'minusInCircle';
        break;

      default:
        stepIcon = 'dot';
        break;
    }

    return stepIcon;
  }

  handleSelectStep(step: StepProps) {
    this.selectedStep.emit(step);
  }
}
