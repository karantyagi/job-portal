import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  verifyPassword: string;
  usernameExists: boolean;
  role = 'JobSeeker';
  successMsg: boolean;
  email: string;

  constructor(private router: Router,
              private service: UserService) {
    this.usernameExists = false;
    this.successMsg = false;
  }


  register(username, password, role, email) {
    let user;
    if (role === 'Recruiter') {
      user = {username, password, role, email};
    } else {
      user = {username, password, role};
    }
    this.service
      .register(user)
      .then((res) => {

          if (res.status === true) {
            if (role === 'JobSeeker') {
              this.router.navigate(['profile-seeker']);
            } else {
              this.successMsg = true;
              this.usernameExists = false;
              this.role = 'JobSeeker';
            }
          } else {

            this.usernameExists = true;
            this.role = 'JobSeeker';
            this.successMsg = false;
          }
        }
      );
  }

  ngOnInit() {
  }

}
