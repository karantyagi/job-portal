import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {EducationService} from '../../services/education.service';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {

  addMode = false;
  editMode = false;
  months = [
    'Month',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  years = [
    'Year',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018'
  ];

  user;
  institute;
  fieldOfStudy;
  degree;
  location;
  startDate;
  startMonth = 'Month';
  startYear = 'Year';
  endMonth = 'Month';
  endYear = 'Year';
  endDate;
  defaultAddOnGoing = false;
  ongoingStatus: boolean;  // present working on this job
  description;
  updateId = '';
  education = [];

  constructor(private userService: UserService,
              private educationService: EducationService) {
  }

  edit(education, updateId) {
    if ( education.ongoingStatus === undefined ) {
      this.ongoingStatus = false;
    } else {
      if ( education.ongoingStatus === 'true') {
        this.ongoingStatus = true;
      } else {
        this.ongoingStatus = false;
      }
      // console.log('type :', typeof this.ongoingStatus);
    }
    console.log('DB ongoingStatus :', this.ongoingStatus);
    this.startMonth = education.startDate.month;
    this.endMonth = education.endDate.month;
    this.startYear = education.startDate.year;
    this.endYear = education.endDate.year;
    this.institute = education.institute;
    this.location = education.location;
    this.description = education.description;
    this.degree = education.degree;
    this.fieldOfStudy = education.fieldOfStudy;
    this.updateId = updateId;
    // console.log('update id : ', updateId);
    this.editMode = true;
  }

  disableMonth(mm) {
    if (mm === 'Month') {
      return true;
    } else {
      return false;
    }
  }

  disableYear(yy) {
    if (yy === 'Year') {
      return true;
    } else {
      return false;
    }
  }

  checkAddStatus(status) {
    this.defaultAddOnGoing = !status;
    console.log('Ongoing ADD type : ', typeof this.defaultAddOnGoing);
    console.log('New status (+) : ', this.defaultAddOnGoing);
  }

  checkUpdateStatus() {
    this.ongoingStatus = !this.ongoingStatus;
    // console.log('Ongoing UPDATE type : ', typeof this.ongoingStatus);
    console.log('New status for update (*) : ', !this.ongoingStatus);
  }

  getEditMode(updateId) {
    if (this.updateId === updateId && this.editMode === true) {
      return true;
    } else {
      return false;
    }
  }

  check() {
    console.log(this.ongoingStatus);
  }

  add() {
    this.institute = '';
    this.location = '';
    this.startMonth = 'Month';
    this.startYear = 'Year';
    this.endMonth = 'Month';
    this.endYear = 'Year';
    this.defaultAddOnGoing = false; // present working on this job
    this.description = '';
    this.degree = '';
    this.fieldOfStudy = '';
    this.addMode = true;
  }

  create() {
    const newEducation = {
      institute: this.institute,
      location: this.location,
      startDate: {'month' : this.startMonth, 'year' : this.startYear},
      endDate: {'month' : this.endMonth, 'year' : this.endYear},
      ongoingStatus: this.defaultAddOnGoing,
      description: this.description,
      fieldOfStudy: this.fieldOfStudy,
      degree: this.degree
    };
    this.educationService.createEducation(newEducation)
      .then((response) => {
        console.log('Add new education : ', response);
        this.educationService.findEducationByUserId()
          .then((educationArray) => {
            console.log('educations array : ', educationArray);
            this.education = educationArray;
          });
      });
    this.addMode = false;
  }

  delete(id) {
    this.educationService.deleteEducation(id)
      .then((response) => {
        this.educationService.findEducationByUserId()
          .then((educationArray) => {
            console.log('educations array : ', educationArray);
            this.education = educationArray;
          });
      });
  }

  update() {
    console.log('Updated new ongoing status as : ', !this.ongoingStatus);
    console.log('Update new education as : ');
    const updatedEducation = {
      degree: this.degree,
      fieldOfStudy: this.fieldOfStudy,
      institute: this.institute,
      location: this.location,
      startDate: {'month' : this.startMonth, 'year' : this.startYear},
      endDate: {'month' : this.endMonth, 'year' : this.endYear},
      ongoingStatus: !this.ongoingStatus,
      description: this.description
    };
    this.editMode = false;
    this.educationService.updateEducation(this.updateId, updatedEducation)
      .then((response) => {
        console.log('Updated in DB : ', response);
        this.educationService.findEducationByUserId()
          .then((educationArray) => {
            console.log('educations array : ', educationArray);
            this.education = educationArray;
          });
      });

  }

  cancelAdd() {
    this.addMode = false;
  }

  cancelEdit() {
    this.editMode = false;
  }

  ngOnInit() {
    this.userService.findLoggedUser()
      .then((user) => {
        this.user = user;
        if (user !== null) {
          this.educationService.findEducationByUserId()
            .then((educationArray) => {
              console.log('educations array : ', educationArray);
              this.education = educationArray;
            });
        }
      });
  }

}

