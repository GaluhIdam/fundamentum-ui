import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FacetButtonProps } from '../../types';
import { AvatarComponent } from '../../molecules/avatar/avatar.component';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { TextComponent } from '../../atoms/text/text.component';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../molecules/loading/loading.component';

@Component({
  selector: 'fui-facet-button',
  standalone: true,
  templateUrl: './facet-button.component.html',
  styleUrl: './facet-button.component.scss',
  imports: [
    CommonModule,
    AvatarComponent,
    IconsComponent,
    TextComponent,
    LoadingComponent,
  ],
})
export class FacetButtonComponent {
  @Input() items: FacetButtonProps[] = [];
  @Input() direction: 'vertical' | 'horizontal' = 'vertical';
  @Input() gap: 's' | 'm' | 'l' = 'm';
  @Input() facetSpace: 'start' | 'between' = 'start';
  @Input() labelWrap: 'elipsis' | 'wrap' = 'wrap';
  @Output() onClickFacet: EventEmitter<FacetButtonProps> = new EventEmitter();

  facetItems: FacetButtonProps[] = [];

  ngOnChanges() {
    this.facetItems = this.items;
  }

  handleClickFacet(item: FacetButtonProps) {
    const tempItem: FacetButtonProps = {
      ...item,
      isSelected: item.isSelected ? false : true,
    };
    this.facetItems = this.facetItems.map((facet: FacetButtonProps) =>
      facet.id === item.id ? tempItem : facet
    );
    this.onClickFacet.emit(tempItem);
  }
}
