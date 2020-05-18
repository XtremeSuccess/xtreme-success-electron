import { SubscriptionService } from './../../services/subscription/subscription-service.service';
import { Subscription } from './../../models/subscription/subscription';
import { User } from './../../models/auth/auth';
import { UserService } from './../../services/data/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  loggedInUser: any;
  user: User;
  subscription: Subscription;

  today: Date = new Date();
  endDate: Date;

  constructor(
    private readonly authService: AuthService,
    private readonly jwtHelper: JwtHelperService,
    private readonly userService: UserService,
    private readonly subsService: SubscriptionService
  ) {
    this.loggedInUser = jwtHelper.decodeToken(authService.getToken());
  }

  ngOnInit(): void {
    this.userService.getUser(this.loggedInUser.id).subscribe(
      (data: User) => {
        this.user = data;
        if (data.user_detail.subscription) {
          this.subsService.getSubscription(data.user_detail.subscription).subscribe(
            (sub: Subscription) => {
              this.subscription = sub;
              this.endDate = new Date(this.subscription.end_date);
            }, error => console.log(error)
          );
        }
      }, error => console.log(error)
    );
  }

  showDaysLeft() {
    return Math.ceil((this.endDate.getTime() - this.today.getTime()) / (1000 * 60 * 60 * 24))
  }

}
