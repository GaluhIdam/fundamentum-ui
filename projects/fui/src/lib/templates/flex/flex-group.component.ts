import {Component, ContentChildren, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FlexGroupAlignItems, FlexGroupDirection, FlexGroupGutterSize, FlexGroupJustifyContent} from './flex-group.type';
import {FlexItemComponent} from "./flex-item.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'fui-flex-group',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './flex-group.component.html',
  styleUrl: './flex-group.component.scss'
})
export class FlexGroupComponent {
  @Input() alignItems: FlexGroupAlignItems = 'stretch';
  @Input() direction: FlexGroupDirection = 'row';
  @Input() gutterSize: FlexGroupGutterSize = 'l';
  @Input() justifyContent: FlexGroupJustifyContent = 'flexStart';
  @Input() wrap: boolean = false;

}
