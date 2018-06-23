import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  users = [];

  ngOnInit() {
    this.fetchPendingUser();

  }

  fetchPendingUser() {
    this.userService.findPendingRecruiters().then((user) => this.users = user);
  }

  approveUser(id) {
    this.userService.approveRecruiter(id).then(() => this.fetchPendingUser());
  }

  rejectUser(id) {
    this.userService.rejectRecruiter(id).then(() => this.fetchPendingUser());
  }

}
