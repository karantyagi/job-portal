import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model.client';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  users = [];
  allJobSeekers = [];
  allUsers = [];
  username: string;
  password: string;
  admins = [];

  ngOnInit() {
    this.fetchPendingUser();
    this.findAllUsers();

  }

  fetchPendingUser() {
    this.userService.findPendingRecruiters().then((user) => this.users = user);
  }

  findAllUsers() {
    this.userService.findAllUsers().then((users) => {
      this.allUsers = users;
      this.allJobSeekers = users.filter((user) => user.role === 'JobSeeker' && user.premiumRequestStatus);
    }).then(() =>  {
        this.admins = this.allUsers.filter((user) => user.role === 'Admin');
    });
  }

  approveUser(id) {
    this.userService.approveRecruiter(id).then(() => this.fetchPendingUser());
  }

  rejectUser(id) {
    this.userService.rejectRecruiter(id).then(() => this.fetchPendingUser());
  }

  grantPremiumAccess(id) {
    this.userService.grantPremiumAccess(id).then(() => this.findAllUsers());
  }

  revokePremiumAccess(id) {
    this.userService.revokePremiumAccess(id).then(() => this.findAllUsers());
  }

  deleteAdmin(id) {
    this.userService.deleteUser(id).then(() => this.findAllUsers());
  }

  createAdmin(username, password) {

    const role = 'Admin';
    this.userService.createUser({username, password, role}).then(() => this.findAllUsers());

  }
}
