import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeComponent, BagdeGroupsComponent } from 'fui';

@Component({
  selector: 'app-badge-view',
  standalone: true,
  imports: [CommonModule, FormsModule, BadgeComponent, BagdeGroupsComponent],
  templateUrl: './badge-view.component.html',
  styleUrl: './badge-view.component.scss',
})
export class BadgeViewComponent {
  disabled: boolean = false;
}
