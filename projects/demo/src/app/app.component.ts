import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../../fui/src/lib/atoms/button/button.component';
import { InputComponent } from '../../../fui/src/lib/atoms/input/input.component';
import { TextComponent } from '../../../fui/src/lib/atoms/text/text.component';
import { IconsComponent } from '../../../fui/src/lib/atoms/icons/icons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    InputComponent,
    TextComponent,
    IconsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo';
}
