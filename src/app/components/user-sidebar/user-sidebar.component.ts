import {Component, OnInit} from '@angular/core';
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
  imageUrl = '../../assets/images/displayPic/dp.jpg';
  editMode = false;
  uploadPicture = true;
  firstName = 'firstName';
  lastName = 'lastName';
  name;
  // tagline = '🎓 CS Grad Northeastern,\n' +
  //   '        University\n' +
  //   '        📌 Actively seeking co-op/\n' +
  //   '        internship starting Jan 2019';

  tagline = ' 📑 Add a bio !';

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

  isDefined() {
    if (this.tagline === undefined) {
      return false;
    } else {
      return true;
    }
  }

  ngOnInit() {
    this.userService.findLoggedUser()
      .then((user) => {
        this.user = user;
        if (user !== null) {
          console.log('Bio : ', this.tagline);
          if (user.tagline !== undefined ) {
            this.tagline = user.tagline;
          }
          if (user.firstName !== undefined ) {
            this.firstName = user.firstName;
          }
          if (user.lastName !== undefined ) {
            this.lastName = user.lastName;
          }
          if (user.requestStatus !== undefined ) {
            this.imageUrl = '../../assets/images/displayPic/recruiterDefault.jpg';
          }
        }
      });
  }


}
