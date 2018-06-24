import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model.client';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router) {
    // this.router.events.subscribe(() => this.sessionCheck());

  }

  ngOnInit() {
  }

  sessionCheck() {
    this.userService.findLoggedUser().then((user) => this.user = user);
  }

  logout() {

    this.userService.logout().then(() => this.router.navigate(['*']))
      .then(() =>
        this.userService.findLoggedUser().then((user) => this.user = user));

  }

}
