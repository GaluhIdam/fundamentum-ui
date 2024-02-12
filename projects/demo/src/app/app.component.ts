import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../../fui/src/lib/atoms/button/button.component';
import { InputComponent } from '../../../fui/src/lib/atoms/input/input.component';
import { TextComponent } from '../../../fui/src/lib/atoms/text/text.component';
import { IconsComponent } from '../../../fui/src/lib/atoms/icons/icons.component';
import { ButtonEmptyComponent } from '../../../fui/src/lib/atoms/button-empty/button-empty.component';
import { BadgeComponent } from '../../../fui/src/lib/atoms/badge/badge.component';
import { EmptyPromptComponent } from '../../../fui/src/lib/organisms/empty-prompt/empty-prompt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    ButtonComponent,
    ButtonEmptyComponent,
    InputComponent,
    TextComponent,
    IconsComponent,
    BadgeComponent,
    EmptyPromptComponent,
  ],
})
export class AppComponent {
  title = 'demo';
}
