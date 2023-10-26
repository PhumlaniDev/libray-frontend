import { Component } from '@angular/core';
import { sideData } from './../../shared/constants/fakeData';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  data = sideData;
}
