import { Component } from '@angular/core';
import { AspectRatioComponent } from 'fui-v2';

@Component({
  selector: 'app-aspect-ratio-view',
  standalone: true,
  templateUrl: './aspect-ratio-view.component.html',
  styleUrl: './aspect-ratio-view.component.scss',
  imports: [AspectRatioComponent],
})
export class AspectRatioViewComponent {}
