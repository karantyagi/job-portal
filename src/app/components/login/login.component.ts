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


  constructor(private router: Router, private userService: UserService) {
    this.badUserNamePass = false;
  }


  login(username, password) {

    this.userService
      .login(username, password)
      .then((user) => {
        if (user != null) {
          if (user.username === 'admin') {
            this.router.navigate(['admin']);
          } else if (user.username === 'faculty') {
            this.router.navigate(['faculty']);
          } else {
            this.router.navigate(['profile']);
          }
        } else {
          this.badUserNamePass = true;
        }
      });
  }


  ngOnInit() {
  }


}
