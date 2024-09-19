import { Routes } from '@angular/router';
import { IntroduceViewComponent } from './introduce-view/introduce-view.component';
import { AspectRatioViewComponent } from './atoms/aspect-ratio-view/aspect-ratio-view.component';
import { BadgeViewComponent } from './atoms/badge-view/badge-view.component';
import { TextViewComponent } from './atoms/text-view/text-view.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'getting-started',
  },
  {
    title: 'Fundamentum UI',
    path: 'getting-started',
    component: IntroduceViewComponent,
  },
  {
    path: 'atoms',
    children: [
      {
        path: '',
        redirectTo: 'aspect-ratio',
        pathMatch: 'full',
      },
      {
        title: 'Aspect Ratio',
        path: 'aspect-ratio',
        component: AspectRatioViewComponent,
      },
      {
        title: 'Badge',
        path: 'badge',
        component: BadgeViewComponent,
      },
      {
        title: 'Text',
        path: 'text',
        component: TextViewComponent,
      },
    ],
  },
];
