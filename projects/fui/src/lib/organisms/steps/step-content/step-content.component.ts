import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'fui-step-content',
  standalone: true,
  imports: [],
  templateUrl: './step-content.component.html',
  styleUrl: './step-content.component.scss',
})
export class StepContentComponent {
  @Input() id: string = '';
  @ViewChild(TemplateRef) template!: TemplateRef<any>;
}
