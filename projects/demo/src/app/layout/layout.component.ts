import { ChangeDetectorRef, Component, inject } from '@angular/core';

import {
  AvatarComponent,
  CollapsibleNavComponent,
  HeaderBreadcrumbComponent,
  HeaderBreadcrumbPanelComponent,
  HeaderComponent,
  HeaderPanelComponent,
  IconsComponent,
  LinkComponent,
  FormControlLayoutComponent,
  InputFieldComponent,
  PageBodyComponent,
  PageComponent,
  PageHeaderComponent,
  PageSectionComponent,
  PageSidebarComponent,
  TextComponent,
  ButtonIconComponent,
  SitewideSearchComponent,
  SitewideDTO,
  PopoverComponent,
  ThemeService
} from 'fui';
import { Router, RouterModule, Routes } from '@angular/router';
import { routes } from '../app.routes';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    SitewideSearchComponent,
    HeaderComponent,
    HeaderPanelComponent,
    IconsComponent,
    LinkComponent,
    AvatarComponent,
    HeaderBreadcrumbComponent,
    HeaderBreadcrumbPanelComponent,
    CollapsibleNavComponent,
    LinkComponent,
    FormControlLayoutComponent,
    InputFieldComponent,
    PageBodyComponent,
    PageComponent,
    PageHeaderComponent,
    PageSectionComponent,
    PageSidebarComponent,
    TextComponent,
    ButtonIconComponent,
    PopoverComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  themeService = inject(ThemeService);
  router: Routes = routes;
  isSidebar: boolean = true;
  isGrow: boolean = true;
  isRestrictWidth: boolean = false;
  direction: 'horizontal' | 'vertical' = 'horizontal';
  extendedBorder: boolean = false;

  show: boolean = false;
  searchTog: boolean = false;

  constructor(private navigation: Router, private cdr: ChangeDetectorRef) {
    this.themeService.setTheme('light');
    this._sortRoutesAlphabetically(this.router);
    this.themeService.applyTheme();
  }

  searchForm: FormControl = new FormControl('');
  data: SitewideDTO[] = [];
  filteredData: SitewideDTO[] = [];

  obs!: Subscription;

  ngOnInit(): void {
    this.obs = this.searchForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe((data) => {
        console.log(data);
        this.filterData();
      });
    this.restructureData();
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.obs) {
      this.obs.unsubscribe();
    }
  }

  searchToggle(): void {
    this.searchTog = !this.searchTog;
  }

  collapseBtn(): void {
    this.isSidebar = !this.isSidebar;
  }

  protected _sortRoutesAlphabetically(routes: any[]): void {
    routes.forEach((route) => {
      if (route.children) {
        route.children.sort((a: { title?: string }, b: { title?: string }) => {
          if (a.title && b.title) {
            return a.title.localeCompare(b.title);
          } else if (a.title) {
            return 1;
          } else if (b.title) {
            return -1;
          } else {
            return 0;
          }
        });
        this._sortRoutesAlphabetically(route.children);
      }
    });
  }

  toggleMode(theme: string): void {
    this.themeService.setTheme(theme);
  }

  showEvent(event: any): void {
    this.isSidebar = event;
  }

  restructureData(): void {
    this.router.forEach((item) => {
      if (item.children) {
        item.children.forEach((child) => {
          if (child.title) {
            const dto: SitewideDTO = {
              title: child.title.toString(),
              icon: 'arrowRight',
              description: 'Navigate to the ' + child.title.toString(),
              anything: {
                parent: item.path,
                child: child.path,
              },
            };
            this.data.push(dto);
          }
        });
      }
    });
    this.filteredData = [...this.data];
  }

  filterData(): void {
    const searchTerm = this.searchForm.value.toLowerCase();
    this.filteredData = this.data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
  }

  goTo(event: any): void {
    this.navigation.navigate([
      event.anything.parent + '/' + event.anything.child,
    ]);
    this.searchTog = false;
  }
}
