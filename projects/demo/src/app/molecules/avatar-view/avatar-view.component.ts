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
      id: 'ab',
      name: 'Ana Baba',
      color: 'primary',
    },
    {
      id: 'cd',
      name: 'Cana Dora',
      color: 'success',
    },
    {
      id: 'ef',
      name: 'Erga Fofa',
      color: 'warning',
    },
    {
      id: 'gh',
      name: 'Gordo Hamilton',
      color: 'danger',
    },
    {
      id: 'ij',
      name: 'Ivy James',
      color: 'accent',
    },
    {
      id: 'kl',
      name: 'Karen Lauren',
      type: 'icon',
      icon: 'apps',
    },
    {
      id: 'mn',
      name: 'Moses Nakama',
      type: 'icon',
      icon: 'userAvatar',
    },
    {
      id: 'op',
      name: 'Osama Pier',
      type: 'image',
      image: this.imageAvatar,
    },
  ];

  handleClickAvatar(item: { id: string; name: string }) {
    console.log('Avatar Clicked', item);
  }
}
