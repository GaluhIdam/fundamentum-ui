import { Component } from '@angular/core';
import {
  StepContentComponent,
  StepProps,
  StepStatus,
  StepsComponent,
  TextComponent,
} from 'fui';

@Component({
  selector: 'app-steps-view',
  standalone: true,
  templateUrl: './steps-view.component.html',
  styleUrl: './steps-view.component.scss',
  imports: [StepsComponent, StepContentComponent, TextComponent],
})
export class StepsViewComponent {
  steps: StepProps[] = [
    {
      id: 'step-1',
      stepStatus: StepStatus.COMPLETE,
      title: 'Step One',
    },
    {
      id: 'step-2',
      stepStatus: StepStatus.CURRENT,
      title: 'Step Two',
    },
    {
      id: 'step-3',
      stepStatus: StepStatus.INCOMPLETE,
      title: 'Step Three',
    },
    {
      id: 'step-4',
      stepStatus: StepStatus.WARNING,
      title: 'Step Four',
    },
    {
      id: 'step-5',
      stepStatus: StepStatus.ERROR,
      title: 'Step Five',
    },
    {
      id: 'step-6',
      stepStatus: StepStatus.DISABLED,
      title: 'Step Six',
      titleColor: 'disabled',
    },
  ];

  stepsCurrent: StepProps[] = [
    {
      id: 'step-current-1',
      stepStatus: StepStatus.COMPLETE,
      title: 'Step One',
    },
    {
      id: 'step-current-2',
      stepStatus: StepStatus.CURRENT,
      title: 'Step Two',
    },
    {
      id: 'step-current-3',
      stepStatus: StepStatus.INCOMPLETE,
      title: 'Step Three',
    },
    {
      id: 'step-current-4',
      stepStatus: StepStatus.WARNING,
      title: 'Step Four',
    },
    {
      id: 'step-current-5',
      stepStatus: StepStatus.ERROR,
      title: 'Step Five',
    },
    {
      id: 'step-current-6',
      stepStatus: StepStatus.DISABLED,
      title: 'Step Six',
      titleColor: 'disabled',
    },
  ];

  stepsCurrentVertical: StepProps[] = [
    {
      id: 'step-current-vertical-1',
      stepStatus: StepStatus.COMPLETE,
      title: 'Step One',
    },
    {
      id: 'step-current-vertical-2',
      stepStatus: StepStatus.CURRENT,
      title: 'Step Two',
    },
    {
      id: 'step-current-vertical-3',
      stepStatus: StepStatus.INCOMPLETE,
      title: 'Step Three',
    },
    {
      id: 'step-current-vertical-4',
      stepStatus: StepStatus.WARNING,
      title: 'Step Four',
    },
    {
      id: 'step-current-vertical-5',
      stepStatus: StepStatus.ERROR,
      title: 'Step Five',
    },
    {
      id: 'step-current-vertical-6',
      stepStatus: StepStatus.DISABLED,
      title: 'Step Six',
      titleColor: 'disabled',
    },
  ];

  stepsIcon: StepProps[] = [
    {
      id: 'step-icon-1',
      stepStatus: StepStatus.COMPLETE,
      stepType: 'icon',
      stepIcon: {
        complete: 'check',
      },
      title: 'Step One1',
    },
    {
      id: 'step-icon-2',
      stepStatus: StepStatus.CURRENT,
      stepType: 'icon',
      stepIcon: {
        current: 'apps',
      },
      title: 'Step Two',
    },
    {
      id: 'step-icon-3',
      stepStatus: StepStatus.INCOMPLETE,
      stepType: 'icon',
      stepIcon: {
        incomplete: 'questionInCircle',
      },
      title: 'Step Three',
    },
    {
      id: 'step-icon-4',
      stepStatus: StepStatus.WARNING,
      stepType: 'icon',
      stepIcon: {
        warning: 'alert',
      },
      title: 'Step Four',
    },
    {
      id: 'step-icon-5',
      stepStatus: StepStatus.ERROR,
      stepType: 'icon',
      stepIcon: {
        error: 'cross',
      },
      title: 'Step Five',
    },
    {
      id: 'step-icon-6',
      stepStatus: StepStatus.DISABLED,
      stepType: 'icon',
      stepIcon: {
        disabled: 'dotInCircle',
      },
      title: 'Step Six',
      titleColor: 'disabled',
    },
  ];

  activeStepCurrent: string = 'step-current-2';
  activeStepCurrentVertical: string = 'step-current-vertical-1';

  handleSelectedStepCurrent(step: StepProps) {
    if (step?.stepStatus !== StepStatus.DISABLED) {
      this.activeStepCurrent = step.id;
    }
  }

  handleSelectedStepCurrentVertical(step: StepProps) {
    if (step?.stepStatus !== StepStatus.DISABLED) {
      this.activeStepCurrentVertical = step.id;
    }
  }
}
