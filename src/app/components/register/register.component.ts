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
  radioCheck = true;

  constructor(private router: Router,
              private service: UserService) {
    this.usernameExists = false;
  }


  register(username, password, verifyPassword) {
    this.service
      .register({username, password})
      .then((res) => {

          if (res.status === true) {
            this.router.navigate(['profile']);
          } else {

            this.usernameExists = true;
          }
        }
      );
  }

  ngOnInit() {
  }

}
