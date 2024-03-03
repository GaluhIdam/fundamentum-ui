import { Component, Input } from '@angular/core';
import { Size } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  @Input() type: 'elastic' | 'logo' | 'chart' | 'spinner' = 'spinner';
  @Input() size: Size = 'sizedefault';
  @Input() logoImage: string = '';
  @Input() logoImageAlt: string = '';
}
