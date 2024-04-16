import {
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-content-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-row.component.html',
  styleUrl: './content-row.component.scss',
})
export class ContentRowComponent {
  @Input({ required: true }) type: 'header' | 'row' | 'content' | 'action' =
    'header';
  @Input({ required: true }) text: string = '';
  @Input({ required: true }) density: 'compact' | 'normal' | 'expanded' =
    'normal';
  @Input({ required: true }) rowHeight: 'single' | 'autoFit' = 'single';
  @Input() bgColor:
    | 'primary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'text'
    | 'blank' = 'blank';
  @Input() colorActive:
    | 'primary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'text'
    | 'blank' = 'success';

 isActive: boolean = false;

  activate() {
    this.isActive = !this.isActive;
  }
}
