import { Component, Input } from '@angular/core';
import { BreadcrumbData, Size } from '../../types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'fui-breadcrumb',
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  imports: [CommonModule, RouterModule, TextComponent],
})
export class BreadcrumbComponent {
  @Input() data: BreadcrumbData[] = [];
  @Input() delimeter: string = '/';
  @Input() labelSize: Size = 'sizedefault';
}
