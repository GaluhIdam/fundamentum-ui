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
                                <a href="components/BadgeComponent.html" data-type="entity-link" >BadgeComponent</a>
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
                                <a href="components/ChartAreaComponent.html" data-type="entity-link" >ChartAreaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartAreaStackedComponent.html" data-type="entity-link" >ChartAreaStackedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartAreaStackedGradientComponent.html" data-type="entity-link" >ChartAreaStackedGradientComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartBarComponent.html" data-type="entity-link" >ChartBarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartCandlestickComponent.html" data-type="entity-link" >ChartCandlestickComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartLineComponent.html" data-type="entity-link" >ChartLineComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartLineStackedComponent.html" data-type="entity-link" >ChartLineStackedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartPieComponent.html" data-type="entity-link" >ChartPieComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartPieDoughnutComponent.html" data-type="entity-link" >ChartPieDoughnutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartRadarComponent.html" data-type="entity-link" >ChartRadarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartScatterComponent.html" data-type="entity-link" >ChartScatterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartTreeComponent.html" data-type="entity-link" >ChartTreeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmptyPromptComponent.html" data-type="entity-link" >EmptyPromptComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconsComponent.html" data-type="entity-link" >IconsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputComponent.html" data-type="entity-link" >InputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModalComponent.html" data-type="entity-link" >ModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaginationComponent.html" data-type="entity-link" >PaginationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PanelComponent.html" data-type="entity-link" >PanelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProgressBaseComponent.html" data-type="entity-link" >ProgressBaseComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProgressComponent.html" data-type="entity-link" >ProgressComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextComponent.html" data-type="entity-link" >TextComponent</a>
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
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BreadCrubmbDataType.html" data-type="entity-link" >BreadCrubmbDataType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BreadcrumbData.html" data-type="entity-link" >BreadcrumbData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Page.html" data-type="entity-link" >Page</a>
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
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});