import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

/**
 * The StepContentComponent
 * @usage
 * ```html
 * <fui-step-content [id]="'step-1'">
 * </fui-step-content>
 * ```
 * <example-url>http://localhost:4200/organisms/steps</example-url>
 */
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
