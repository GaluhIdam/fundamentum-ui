import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'fui-loading-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
})
export class LoadingBarComponent {
  progressWidth: string = '0%';

  @Input() heightPx: string = '30px';
  @Input() duration: number = 3000;
  @Input() delay: number = 1000;
  @Input() loading: boolean = false;
  @Output() loadingComplete: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  startProgress() {
    setTimeout(() => {
      this.progressWidth = '100%';
    }, 100);
    setTimeout(() => {
      this.loadingComplete.emit(false);
    }, this.duration + this.delay+100);
  }

  getTransitionStyle(): string {
    return `width ${this.duration / 1000}s ease-in-out ${this.delay / 1000}s`;
  }

  ngOnChanges() {
    if (this.loading) {
      this.startProgress();
    } else {
      this.resetProgress();
    }
  }

  resetProgress() {
    this.progressWidth = '0%';
  }
}
