import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string;
  password: string;
  badUserNamePass: boolean;
  verificationPending: boolean;


  constructor(private router: Router, private userService: UserService) {
    this.badUserNamePass = false;
    this.verificationPending = false;
  }


  login(username, password) {

    this.userService
      .login(username, password)
      .then((obj) => {
        if (obj.status === 'success') {
            if (obj.role === 'JobSeeker' ) {
              this.router.navigate(['profile-seeker']);
            } else if (obj.role === 'Admin' ) {
              this.router.navigate(['admin']);
            } else {
              this.router.navigate(['profile-recruiter']);
            }
          // if (user.username === 'admin') {
          //   this.router.navigate(['admin']);
          // } else if (user.username === 'faculty') {
          //   this.router.navigate(['faculty']);
          // } else {
          //   this.router.navigate(['profile']);
          // }
        } else if (obj.status === 'user does not exists') {
          this.badUserNamePass = true;
          this.verificationPending =  false;
        } else {
          this.badUserNamePass = false;
          this.verificationPending =  true;
        }
      });
  }


  ngOnInit() {
  }


}
