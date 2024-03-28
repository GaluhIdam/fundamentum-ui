import { Component } from '@angular/core';
import { FacetButtonComponent, FacetButtonProps } from 'fui';

@Component({
  selector: 'app-facet-button-view',
  standalone: true,
  templateUrl: './facet-button-view.component.html',
  styleUrl: './facet-button-view.component.scss',
  imports: [FacetButtonComponent],
})
export class FacetButtonViewComponent {
  facetItems: FacetButtonProps[] = [
    {
      id: 'facet-1',
      type: 'none',
      facetLabel: {
        label: 'Simple, no icon',
      },
      facetQuantity: {
        quantity: 6,
        activeColor: 'ghost',
        activeBackground: 'accent',
      },
    },
    {
      id: 'facet-2',
      type: 'icon',
      facetLabel: {
        label: 'Simple, with icon',
      },
      facetIcon: {
        icon: 'filter',
      },
      facetQuantity: {
        quantity: 6,
        activeColor: 'ghost',
        activeBackground: 'accent',
      },
    },
    {
      id: 'facet-3',
      type: 'none',
      facetLabel: {
        label: 'Simple, selected',
      },
      facetQuantity: {
        quantity: 6,
        activeColor: 'ghost',
        activeBackground: 'accent',
      },
      isSelected: true,
    },
    {
      id: 'facet-4',
      type: 'indicator',
      facetLabel: {
        label: 'Facet with Indicator',
      },
      facetIndicator: {
        color: 'success',
      },
      facetQuantity: {
        quantity: 6,
        color: 'accent',
        activeColor: 'ghost',
        activeBackground: 'accent',
      },
    },
    {
      id: 'facet-5',
      type: 'avatar',
      facetLabel: {
        label: 'Facet avatar as icon',
      },
      facetAvatar: {
        id: 'avatar-1',
        type: 'initial',
        color: 'primary',
        name: 'Fundamentum UI',
      },
      facetQuantity: {
        quantity: 6,
        color: 'success',
        activeColor: 'ghost',
        activeBackground: 'accent',
      },
    },
    {
      id: 'facet-6',
      type: 'none',
      facetLabel: {
        label: 'Facet disabled',
      },
      facetQuantity: {
        quantity: 6,
      },
      isDisabled: true,
    },
    {
      id: 'facet-7',
      type: 'none',
      facetLabel: {
        label: 'Facet loading',
      },
      facetQuantity: {
        quantity: 6,
      },
      isLoading: true,
    },
  ];
}
