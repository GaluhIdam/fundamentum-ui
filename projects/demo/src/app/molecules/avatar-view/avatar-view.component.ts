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
  imageAvatar: string =
    'https://previews.123rf.com/images/yommy8008/yommy80081610/yommy8008161000081/67376534-square-photo-with-head-detail-of-few-weeks-old-tabby-cat-kitten-has-blue-eyes-and-dark-nose-baby.jpg';
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
