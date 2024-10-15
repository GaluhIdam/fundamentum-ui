import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalloutComponent } from 'fui';
import { ButtonIconComponent } from '../../../../../fui/src/public-api';

@Component({
  selector: 'app-callout-view',
  standalone: true,
  imports: [CalloutComponent, CommonModule, ButtonIconComponent],
  templateUrl: './callout-view.component.html',
  styleUrl: './callout-view.component.scss',
})
export class CalloutViewComponent {
  visibilityPrimary: boolean = true;
  visibilitySuccess: boolean = true;
  visibilityWarning: boolean = true;
  visibilityDanger: boolean = true;
  visibilityPrimaryCustom: boolean = true;
  message: string = 'You can customize icon, header, and paragraph';

  onHandleCalloutPrimary(): void {
    this.visibilityPrimary = !this.visibilityPrimary;
  }
  onHandleCalloutSuccess(): void {
    this.visibilitySuccess = !this.visibilitySuccess;
  }
  onHandleCalloutWarning(): void {
    this.visibilityWarning = !this.visibilityWarning;
  }
  onHandleCalloutDanger(): void {
    this.visibilityDanger = !this.visibilityDanger;
  }
  onHandleCalloutPrimaryCustom(): void {
    this.visibilityPrimaryCustom = !this.visibilityPrimary;
  }
}
