import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalloutComponent } from 'fui';

@Component({
  selector: 'app-callout-view',
  standalone: true,
  imports: [CalloutComponent, CommonModule],
  templateUrl: './callout-view.component.html',
  styleUrl: './callout-view.component.scss',
})
export class CalloutViewComponent {
  visibilityPrimary: boolean = true;
  visibilitySuccess: boolean = true;
  visibilityWarning: boolean = true;
  visibilityDanger: boolean = true;
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
}
