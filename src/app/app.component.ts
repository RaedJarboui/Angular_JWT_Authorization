import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './models/role';
import { User } from './models/User';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jwt-authorization';

  currentUser: User = new User;

  constructor(private authenticationService: AuthService, private router: Router) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
      console.log(this.currentUser)
    });
  }

  isAdmin() {
    return this.currentUser?.role === Role.Admin;
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }
}
