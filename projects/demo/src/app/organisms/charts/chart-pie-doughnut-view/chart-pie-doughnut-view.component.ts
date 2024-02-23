import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartPieDoughnutComponent } from 'fui';

@Component({
  selector: 'app-chart-pie-doughnut-view',
  standalone: true,
  imports: [ChartPieDoughnutComponent, CommonModule, FormsModule],
  templateUrl: './chart-pie-doughnut-view.component.html',
  styleUrl: './chart-pie-doughnut-view.component.scss',
})
export class ChartPieDoughnutViewComponent {
  // Pie Doughnut Chart Data
  title: string = 'Pie Doughnut Chart';
  subTitle: string = 'This is example pie doughnut chart';
  watcher: boolean = false;
  dataPie: Array<{
    value: number;
    name: string;
  }> = [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' },
  ];
  themeChart: 'light' | 'dark' = 'light';

  // Function to add new data
  addData() {
    this.dataPie.push({ value: 0, name: '' });
    this.watcher = !this.watcher;
  }

  // Function to remove data
  removeData(index: number) {
    this.dataPie.splice(index, 1);
    this.watcher = !this.watcher;
  }

  // Function to update chart theme
  changeTheme(): void {
    this.themeChart = this.themeChart === 'light' ? 'dark' : 'light';
  }

  // Function to handle data editing
  updateData(index: number, event: any, type: string) {
    if (type === 'name') {
      this.dataPie[index].name = event.target.value;
      this.watcher = !this.watcher;
    } else if (type === 'value') {
      this.dataPie[index].value = parseInt(event.target.value);
      this.watcher = !this.watcher;
    }
  }
}
