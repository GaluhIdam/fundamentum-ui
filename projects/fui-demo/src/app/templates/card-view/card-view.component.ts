import { Component } from '@angular/core';
import { CardComponent, TextComponent } from 'fui';
@Component({
  selector: 'app-card-view',
  standalone: true,
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss',
  imports: [CardComponent, TextComponent],
})
export class CardViewComponent {
  iconImage =
    'https://cdn.freelogovectors.net/wp-content/uploads/2023/05/beats-logo-freelogovectors.net_.png';
  cardImage =
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg';
}
