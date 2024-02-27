import { Component } from '@angular/core';
import { AvatarComponent, AvatarGroupProps } from 'fui';

@Component({
  selector: 'app-avatar-view',
  standalone: true,
  templateUrl: './avatar-view.component.html',
  styleUrl: './avatar-view.component.scss',
  imports: [AvatarComponent],
})
export class AvatarViewComponent {
  imageAvatar: string = 'https://source.unsplash.com/64x64/?cat';
  avatarGroupDataInitial: AvatarGroupProps[] = [
    {
      name: 'Ana Baba',
      color: 'primary',
    },
    {
      name: 'Cana Dora',
      color: 'success',
    },
    {
      name: 'Erga Fofa',
      color: 'warning',
    },
    {
      name: 'Gordo Hamilton',
      color: 'danger',
    },
    {
      name: 'Ivy James',
      color: 'accent',
    },
    {
      name: 'Karen Lauren',
      type: 'icon',
      icon: 'apps',
    },
    {
      name: 'Moses Nakama',
      type: 'icon',
      icon: 'userAvatar',
    },
    {
      name: 'Osama Pier',
      type: 'image',
      image: this.imageAvatar,
    },
  ];
}
