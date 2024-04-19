import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

/**
 * The AspectRatioComponent
 * @usage
 * ```html
 * <fui-aspect-ratio
 *  [width]="16"
 *  [height]="9">
 * </fui-aspect-ratio>
 * ```
 * <example-url>http://localhost:4200/atoms/aspect-ratio</example-url>
 */
@Component({
  selector: 'fui-aspect-ratio',
  standalone: true,
  imports: [],
  templateUrl: './aspect-ratio.component.html',
  styleUrl: './aspect-ratio.component.scss',
})
export class AspectRatioComponent implements AfterViewInit {
  @Input() width: number = 16;
  @Input() height: number = 9;
  @Input() maxWidth!: number;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.renderer.setProperty(
      this.el.nativeElement,
      'style',
      `
      --aspect-ratio: ${this.width} / ${this.height};
      --max-width-aspect-ratio-content: ${this.maxWidth}px
      `
    );
  }
}
