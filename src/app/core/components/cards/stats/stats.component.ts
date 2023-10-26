import { Component } from '@angular/core';
import { statsData } from 'src/app/core/shared/constants/fakeData';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  data = statsData;
}
