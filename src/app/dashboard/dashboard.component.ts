import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';

  constructor() { }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
