import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  constructor(private userService: UserService) {
  }
  user;
  editMode = false;
  uploadPicture = true;
  name;
  // tagline = '🎓 CS Grad Northeastern,\n' +
  //   '        University\n' +
  //   '        📌 Actively seeking co-op/\n' +
  //   '        internship starting Jan 2019';

  tagline;

  editBio() {
    this.editMode = true;
  }

  saveBio() {
    console.log('New Bio : ', this.tagline);
    const updateduser = {
      'tagline': this.tagline,
    };
    this.editMode = false;
    this.userService.updateUserProfile(updateduser)
      .then((updatedUser) => {
        console.log('Update success');
      });
  }

  cancel() {
    this.editMode = false;
  }

  ngOnInit() {
    this.userService.findLoggedUser()
      .then((user) => {
        this.user = user;
        if (user !== null ) {
          console.log('Bio : ', user.tagline);
          this.tagline = user.tagline;
        }
      });
  }


}
