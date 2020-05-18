import { AuthService } from './services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'ng-connection-service';
import { ElectronService } from 'ngx-electron';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'xtreme-success-electron';
  status: string = "ONLINE";
  isConnected: boolean = true;
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly connectionService: ConnectionService,
    private readonly _electronService: ElectronService
  ) {
  }
  ngOnInit(): void {
    this.connectionService.monitor().subscribe((connectionStatus) => {
      this.isConnected = connectionStatus;
      if (this.isConnected) {
        this.status = "ONLINE";
        console.log('Online');
      } else {
        this.status = "OFFLINE";
      }
    });
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard'])
    }
  }
}
