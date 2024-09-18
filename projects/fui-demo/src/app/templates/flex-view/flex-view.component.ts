import { Component } from '@angular/core';
import {FlexGroupComponent, FlexItemComponent, PanelComponent, ButtonComponent} from 'fui';

@Component({
  selector: 'fui-flex-view',
  standalone: true,
  imports: [FlexGroupComponent, FlexItemComponent, PanelComponent, ButtonComponent],
  templateUrl: './flex-view.component.html',
  styleUrl: './flex-view.component.scss'
})
export class FlexViewComponent {

}
