import { Component } from '@angular/core';
import {
  AvatarComponent,
  ButtonEmptyComponent,
  ButtonIconComponent,
  HeaderComponent,
  HeaderPanelComponent,
  IconsComponent,
  TourComponent,
  TourStepComponent,
} from 'fui';

@Component({
  selector: 'app-tour-view',
  standalone: true,
  templateUrl: './tour-view.component.html',
  styleUrl: './tour-view.component.scss',
  imports: [
    HeaderComponent,
    HeaderPanelComponent,
    AvatarComponent,
    IconsComponent,
    TourComponent,
    TourStepComponent,
    ButtonEmptyComponent,
    ButtonIconComponent,
  ],
})
export class TourViewComponent {
  isStepTwoTourComplete = false;
  isStartTour = false;

  startTour() {
    this.isStartTour = true;
  }

  goToNextStep() {
    this.isStepTwoTourComplete = true;
  }

  handleTourFinished(value: boolean) {
    if (value) {
      this.isStepTwoTourComplete = false;
      this.isStartTour = false;
    }
  }
}
