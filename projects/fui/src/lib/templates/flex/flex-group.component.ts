import {Component, Input} from '@angular/core';
import {FlexGroupAlignItems, FlexGroupDirection, FlexGroupGutterSize, FlexGroupJustifyContent} from './flex-group.type';

@Component({
  selector: 'fui-flex-group',
  standalone: true,
  imports: [],
  templateUrl: './flex-group.component.html',
  styleUrl: './flex-group.component.scss'
})
export class FlexGroupComponent {
  @Input() alignItems: FlexGroupAlignItems = 'stretch';
  @Input() direction: FlexGroupDirection = 'row';
  @Input() gutterSize: FlexGroupGutterSize = 'l';
  @Input() justifyContent: FlexGroupJustifyContent = 'flexStart';
  @Input() responsive: boolean = true;
  @Input() wrap: boolean = false;
}
