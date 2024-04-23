import { Component } from '@angular/core';
import { AccordionComponent } from 'fui';

@Component({
  selector: 'app-accordion-view',
  standalone: true,
  templateUrl: './accordion-view.component.html',
  styleUrl: './accordion-view.component.scss',
  imports: [AccordionComponent],
})
export class AccordionViewComponent {}
