import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'fui-validator-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validator-field.component.html',
  styleUrl: './validator-field.component.scss',
})
export class ValidatorFieldComponent {
  @ContentChild('content') content: any;
  @Input() message: string = 'This is required!';
}
