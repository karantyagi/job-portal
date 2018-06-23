import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  user;
  updateId = '';
  username = '';
  password = '';
  firstName = '';
  lastName =  '';
  email = '';
  phone = '';
  editMode = false;
  socialContact =
    [
      {
        'type': 'facebook',
        'url': 'https://www.facebook.com/karan.tyagi.21'

      },
      {
        'type': 'linkedin',
        'url': 'https://www.linkedin.com/in/karantyagi-21/'

      },
      {
        'type': 'twitter',
        'url': 'https://twitter.com/karan__tyagi'

      },
      {
        'type': 'github',
        'url': 'https://github.com/karantyagi'

      }
    ];

  constructor(private userService: UserService) {
  }

  edit() {
    this.editMode = true;
  }

  cancel() {
    this.editMode = false;
  }

  update() {
    alert('Update info !');
    this.editMode = false;
  }

  ngOnInit() {
    this.userService.findLoggedUser()
      .then((user) => {
        this.user = user;
        if (user !== null ) {
          this.updateId = user._id;
          console.log('Update ID : ', this.updateId);
          this.username = user.username;
          this.password = user.password;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.email = user.email;
          this.phone = user.phone;
          // this.socialContact = user.socialContact;
          console.log(this.user);
        } else {
          console.log('User : null');
        }
      });
  }

}
