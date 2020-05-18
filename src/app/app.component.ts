import { AuthService } from './services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private readonly _electronService: ElectronService
  ) {
  }
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard'])
    }
  }
}
