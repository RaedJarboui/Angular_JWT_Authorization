import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../models/role';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User = new User;
  errorMessage: string = "";

  constructor(private userService: UserService,
              private authenticationService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  changeRole() {
    const newRole = this.currentUser.role === Role.Admin ? Role.User : Role.Admin;

    this.userService.changeRole(newRole).subscribe(() => {
      this.authenticationService.logOut();
      this.router.navigate(['/login']);
    }, error => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(error);
    })
  }

}
