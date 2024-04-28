import { Component } from '@angular/core';
import {
  SitewideSearchComponent,
  SitewideDTO,
} from 'fui';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sitewide-view',
  standalone: true,
  imports: [SitewideSearchComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './sitewide-view.component.html',
  styleUrl: './sitewide-view.component.scss',
})
export class SitewideViewComponent {
  searchForm: FormControl = new FormControl('');
  data: SitewideDTO[] = [
    {
      icon: 'clock',
      title: 'Home',
      description: 'Navigate to the homepage',
      avatar: 'user avatar',
    },
    {
      icon: 'clock',
      title: 'About Us',
      description: 'Learn more about our company',
      avatar: 'about avatar',
    },
    {
      icon: 'clock',
      title: 'Settings',
      description: 'Update your preferences',
      avatar: 'settings avatar',
    },
    {
      icon: 'clock',
      title: 'Contact Us',
      description: 'Get in touch with us',
      avatar: 'contact avatar',
    },
    {
      icon: 'clock',
      title: 'Products',
      description: 'Explore our range of products',
      avatar: 'products avatar',
    },
    {
      icon: 'clock',
      title: 'Services',
      description: 'Discover our offered services',
      avatar: 'services avatar',
    },
    {
      icon: 'clock',
      title: 'FAQ',
      description: 'Find answers to commonly asked questions',
      avatar: 'faq avatar',
    },
    {
      icon: 'clock',
      title: 'Blog',
      description: 'Read our latest blog posts',
      avatar: 'blog avatar',
    },
    {
      icon: 'clock',
      title: 'Events',
      description: 'Check out upcoming events',
      avatar: 'events avatar',
    },
    {
      icon: 'clock',
      title: 'Login',
      description: 'Sign in to your account',
      avatar: 'login avatar',
    },
  ];
}
