import { Component, Input } from '@angular/core';
import { Size } from '../../types';
import { CommonModule } from '@angular/common';
import { OverlayMaskComponent } from '../../atoms/overlay-mask/overlay-mask.component';

@Component({
  selector: 'fui-loading',
  standalone: true,
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
  imports: [CommonModule, OverlayMaskComponent],
})
export class LoadingComponent {
  @Input() withOverlay: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() type: 'elastic' | 'logo' | 'chart' | 'spinner' = 'spinner';
  @Input() size: Size = 'sizedefault';
  @Input() logoImage: string = '';
  @Input() logoImageAlt: string = '';
}
