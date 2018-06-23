import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  constructor() { }

  editMode = false;
  uploadPicture = true;
  name;
  tagline = '🎓 CS Grad Northeastern,\n' +
    '        University\n' +
    '        📌 Actively seeking co-op/\n' +
    '        internship starting Jan 2019';

  editBio() {
    this.editMode = true;
  }

  saveBio() {
    // console.log('New Bio : ', this.tagline);
    this.editMode = false;
  }

  cancel() {
    this.editMode = false;
  }

  ngOnInit() {
    // console.log('Bio : ', this.tagline);
  }

}
