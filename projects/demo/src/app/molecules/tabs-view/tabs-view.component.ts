import { Component } from '@angular/core';
import { Icon, TabsComponent } from 'fui';

@Component({
  selector: 'app-tabs-view',
  standalone: true,
  imports: [TabsComponent],
  templateUrl: './tabs-view.component.html',
  styleUrl: './tabs-view.component.scss',
})
export class TabsViewComponent {
  dataTabs: {
    active: boolean | 'disabled';
    icon?: Icon;
    sideIcon?: 'right' | 'left';
    prepend?: string;
    append?: string;
    title: string;
    content: string;
  }[] = [
    {
      active: true,
      title: 'Cobalt',
      content:
        'Cobalt is a chemical element with symbol Co and atomic number 27. Like nickel, cobalt is found in the Earth’s crust only in chemically combined form, save for small deposits found in alloys of natural meteoric iron. The free element, produced by reductive smelting, is a hard, lustrous, silver-gray metal.',
    },
    {
      active: false,
      title: 'Dextrose',
      content:
        'Intravenous sugar solution, also known as dextrose solution, is a mixture of dextrose (glucose) and water. It is used to treat low blood sugar or water loss without electrolyte loss.',
    },
    {
      active: 'disabled',
      icon: 'heatmap',
      sideIcon: 'left',
      title: 'Hydrogen',
      content:
        'Intravenous sugar solution, also known as dextrose solution, is a mixture of dextrose (glucose) and water. It is used to treat low blood sugar or water loss without electrolyte loss.',
    },
    {
      active: false,
      title: 'Monosodium Glutamate',
      content:
        'Monosodium glutamate (MSG, also known as sodium glutamate) is the sodium salt of glutamic acid, one of the most abundant naturally occurring non-essential amino acids. Monosodium glutamate is found naturally in tomatoes, cheese and other foods.',
    },
  ];
}
