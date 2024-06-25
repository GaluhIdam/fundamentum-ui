import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * The export class CollapsibleNavGroupComponent {

 * @usage
 * ```html
 *  <fui-collapsible-nav-group
        class="danger"
        [isCollapsed]="isCollapsed5"
        (isCollapse)="toggleCollapse5($event)"
      >
        <div header class="header {{ !isCollapsed5 ? 'btm' : '' }}">
          <div class="logo">
            <fui-icons [icon]="'package'" [size]="'sizel'" [color]="'danger'" />
            <h4>Nav Group</h4>
          </div>
          <fui-button-icon
            [type]="'button'"
            [option]="'icon'"
            [style]="'filled'"
            [text]="'Button Primary'"
            [color]="'danger'"
            [fullWidth]="false"
            [icon]="!isCollapsed5 ? 'arrowRight' : 'arrowDown'"
            [iconSide]="'left'"
          />
        </div>
        <div body class="body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            commodi, fuga earum ab nobis accusamus delectus voluptatibus impedit
            placeat? Facere minima commodi suscipit illo rerum doloremque illum
            magni, est architecto?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            commodi, fuga earum ab nobis accusamus delectus voluptatibus impedit
            placeat? Facere minima commodi suscipit illo rerum doloremque illum
            magni, est architecto?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            commodi, fuga earum ab nobis accusamus delectus voluptatibus impedit
            placeat? Facere minima commodi suscipit illo rerum doloremque illum
            magni, est architecto?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            commodi, fuga earum ab nobis accusamus delectus voluptatibus impedit
            placeat? Facere minima commodi suscipit illo rerum doloremque illum
            magni, est architecto?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            commodi, fuga earum ab nobis accusamus delectus voluptatibus impedit
            placeat? Facere minima commodi suscipit illo rerum doloremque illum
            magni, est architecto?
          </p>
        </div>
 *    </fui-collapsible-nav-group>
 * ```
 * <example-url>http://localhost:4200/organisms/collapsible-nav-group</example-url>
 */
@Component({
  selector: 'fui-collapsible-nav-group',
  standalone: true,
  imports: [],
  templateUrl: './collapsible-nav-group.component.html',
  styleUrl: './collapsible-nav-group.component.scss',
})
export class CollapsibleNavGroupComponent {
  @Output() isCollapse: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input({ required: true }) isCollapsed: boolean = false;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapse.emit(this.isCollapsed);
  }
}
