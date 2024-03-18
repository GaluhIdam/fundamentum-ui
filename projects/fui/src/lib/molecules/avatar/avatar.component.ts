import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AvatarGroupProps, AvatarType, Color, Icon, Size } from '../../types';
import { CommonModule } from '@angular/common';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'fui-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  imports: [CommonModule, IconsComponent, TextComponent],
})
export class AvatarComponent {
  @Input() id: string = '';
  @Input() shape: 'user' | 'spaces' = 'user';
  @Input() type: AvatarType = 'initial';
  @Input() size: Size = 'sizedefault';
  @Input() color: Color = 'primary';
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() icon: Icon = 'userAvatar';
  @Input() avatarBorder: boolean = false;
  @Input() isGroup: boolean = false;
  @Input() avatarGroupData: AvatarGroupProps[] = [];
  @Output() onClickAvatar: EventEmitter<{ id: string; name: string }> =
    new EventEmitter();

  initialName(name: string) {
    if (name) {
      const arrayName = name.split(' ');
      if (arrayName.length > 1) {
        const firstInitial = arrayName[0].charAt(0);
        const secondInitial = arrayName[1].charAt(0);
        return firstInitial + secondInitial;
      } else {
        const firstInitial = arrayName[0].charAt(0);
        return firstInitial;
      }
    }
    return this.name;
  }

  handleClickAvatar(id: string, name: string) {
    const emitDataAvatar = { id, name };
    this.onClickAvatar.emit(emitDataAvatar);
  }
}
