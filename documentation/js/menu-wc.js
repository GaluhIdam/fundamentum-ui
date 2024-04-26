'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">fundamentum-ui documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AccordionComponent.html" data-type="entity-link" >AccordionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppendComponent.html" data-type="entity-link" >AppendComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AspectRatioComponent.html" data-type="entity-link" >AspectRatioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AvatarComponent.html" data-type="entity-link" >AvatarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BadgeComponent.html" data-type="entity-link" >BadgeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BottombarComponent.html" data-type="entity-link" >BottombarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BreadcrumbComponent.html" data-type="entity-link" >BreadcrumbComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ButtonComponent.html" data-type="entity-link" >ButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ButtonEmptyComponent.html" data-type="entity-link" >ButtonEmptyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ButtonIconComponent.html" data-type="entity-link" >ButtonIconComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CalloutComponent.html" data-type="entity-link" >CalloutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardComponent.html" data-type="entity-link" >CardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CheckboxComponent.html" data-type="entity-link" >CheckboxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CollapsibleNavComponent.html" data-type="entity-link" >CollapsibleNavComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ComboBoxComponent.html" data-type="entity-link" >ComboBoxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CommentListComponent.html" data-type="entity-link" >CommentListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentRowComponent.html" data-type="entity-link" >ContentRowComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContextMenuComponent.html" data-type="entity-link" >ContextMenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContextMenuItemComponent.html" data-type="entity-link" >ContextMenuItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DataGridComponent.html" data-type="entity-link" >DataGridComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DescriptionListComponent.html" data-type="entity-link" >DescriptionListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EchartsComponent.html" data-type="entity-link" >EchartsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmptyPromptComponent.html" data-type="entity-link" >EmptyPromptComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FacetButtonComponent.html" data-type="entity-link" >FacetButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FieldFilepickerComponent.html" data-type="entity-link" >FieldFilepickerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FieldTextComponent.html" data-type="entity-link" >FieldTextComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FilterGroupButtonComponent.html" data-type="entity-link" >FilterGroupButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FilterGroupComponent.html" data-type="entity-link" >FilterGroupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FlexGroupComponent.html" data-type="entity-link" >FlexGroupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FlexItemComponent.html" data-type="entity-link" >FlexItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FlyoutBodyComponent.html" data-type="entity-link" >FlyoutBodyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FlyoutComponent.html" data-type="entity-link" >FlyoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FlyoutFooterComponent.html" data-type="entity-link" >FlyoutFooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FlyoutHeaderComponent.html" data-type="entity-link" >FlyoutHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormControlLayoutComponent.html" data-type="entity-link" >FormControlLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderBreadcrumbComponent.html" data-type="entity-link" >HeaderBreadcrumbComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderBreadcrumbPanelComponent.html" data-type="entity-link" >HeaderBreadcrumbPanelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderPanelComponent.html" data-type="entity-link" >HeaderPanelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HighlightComponent.html" data-type="entity-link" >HighlightComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconsComponent.html" data-type="entity-link" >IconsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ImageComponent.html" data-type="entity-link" >ImageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InlineEditComponent.html" data-type="entity-link" >InlineEditComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputComponent.html" data-type="entity-link" >InputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputFieldComponent.html" data-type="entity-link" >InputFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputFieldNumberComponent.html" data-type="entity-link" >InputFieldNumberComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputFieldPasswordComponent.html" data-type="entity-link" >InputFieldPasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputSearchFieldComponent.html" data-type="entity-link" >InputSearchFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LinkComponent.html" data-type="entity-link" >LinkComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoadingComponent.html" data-type="entity-link" >LoadingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModalBodyComponent.html" data-type="entity-link" >ModalBodyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModalComponent.html" data-type="entity-link" >ModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModalFooterComponent.html" data-type="entity-link" >ModalFooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModalHeaderComponent.html" data-type="entity-link" >ModalHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OverlayMaskComponent.html" data-type="entity-link" >OverlayMaskComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageBodyComponent.html" data-type="entity-link" >PageBodyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageComponent.html" data-type="entity-link" >PageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageHeaderComponent.html" data-type="entity-link" >PageHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageSectionComponent.html" data-type="entity-link" >PageSectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageSidebarComponent.html" data-type="entity-link" >PageSidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaginationComponent.html" data-type="entity-link" >PaginationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PanelComponent.html" data-type="entity-link" >PanelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PopoverComponent.html" data-type="entity-link" >PopoverComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PrependComponent.html" data-type="entity-link" >PrependComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProgressBaseComponent.html" data-type="entity-link" >ProgressBaseComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProgressComponent.html" data-type="entity-link" >ProgressComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RadioComponent.html" data-type="entity-link" >RadioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResizableContainerComponent.html" data-type="entity-link" >ResizableContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResizablePanelComponent.html" data-type="entity-link" >ResizablePanelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectableComponent.html" data-type="entity-link" >SelectableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectFieldComponent.html" data-type="entity-link" >SelectFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidenavComponent.html" data-type="entity-link" >SidenavComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SitewideComponent.html" data-type="entity-link" >SitewideComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpacerComponent.html" data-type="entity-link" >SpacerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StepContentComponent.html" data-type="entity-link" >StepContentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StepsComponent.html" data-type="entity-link" >StepsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabsComponent.html" data-type="entity-link" >TabsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabsContentComponent.html" data-type="entity-link" >TabsContentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextareaComponent.html" data-type="entity-link" >TextareaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextComponent.html" data-type="entity-link" >TextComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimelineComponent.html" data-type="entity-link" >TimelineComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimelineSectionComponent.html" data-type="entity-link" >TimelineSectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TitleComponent.html" data-type="entity-link" >TitleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ToastComponent.html" data-type="entity-link" >ToastComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TooltipComponent.html" data-type="entity-link" >TooltipComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TreeViewComponent.html" data-type="entity-link" >TreeViewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ValidatorFieldComponent.html" data-type="entity-link" >ValidatorFieldComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/ThousandSeparatorDirective.html" data-type="entity-link" >ThousandSeparatorDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ThemesChart.html" data-type="entity-link" >ThemesChart</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DarkModeService.html" data-type="entity-link" >DarkModeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToastService.html" data-type="entity-link" >ToastService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AvatarGroupProps.html" data-type="entity-link" >AvatarGroupProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BreadCrubmbDataType.html" data-type="entity-link" >BreadCrubmbDataType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BreadcrumbData.html" data-type="entity-link" >BreadcrumbData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContextMenuItemProps.html" data-type="entity-link" >ContextMenuItemProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContextMenuProps.html" data-type="entity-link" >ContextMenuProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataCheckboxProps.html" data-type="entity-link" >DataCheckboxProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataRadioProps.html" data-type="entity-link" >DataRadioProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataSideDTO.html" data-type="entity-link" >DataSideDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataZoomDTO.html" data-type="entity-link" >DataZoomDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DescriptionListProps.html" data-type="entity-link" >DescriptionListProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FacetButtonProps.html" data-type="entity-link" >FacetButtonProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GridDTO.html" data-type="entity-link" >GridDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LegendDTO.html" data-type="entity-link" >LegendDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OptionChart.html" data-type="entity-link" >OptionChart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Page.html" data-type="entity-link" >Page</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PiecesDTO.html" data-type="entity-link" >PiecesDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PopoverConfigProps.html" data-type="entity-link" >PopoverConfigProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectableDTO.html" data-type="entity-link" >SelectableDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SeriesDTO.html" data-type="entity-link" >SeriesDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SitewideDTO.html" data-type="entity-link" >SitewideDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StepProps.html" data-type="entity-link" >StepProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TitleDTO.html" data-type="entity-link" >TitleDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ToastProps.html" data-type="entity-link" >ToastProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ToolBoxDTO.html" data-type="entity-link" >ToolBoxDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TooltipDTO.html" data-type="entity-link" >TooltipDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeViewProps.html" data-type="entity-link" >TreeViewProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualMapDTO.html" data-type="entity-link" >VisualMapDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/XAxisDTO.html" data-type="entity-link" >XAxisDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/YAxisDTO.html" data-type="entity-link" >YAxisDTO</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});