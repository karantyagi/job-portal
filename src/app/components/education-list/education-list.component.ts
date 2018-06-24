import { Component, OnInit } from '@angular/core';
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
  startMonth = 'month';
  startYear = 'year';
  endMonth = 'month';
  endYear = 'year';
  endDate;
  ongoingStatus: String; // present working on this job
  description;
  updateId = '';
  education = [];

  constructor(private userService: UserService,
              private educationService: EducationService) {
  }

  edit(education, updateId) {
    this.institute = education.institute;
    this.location = education.location;
    this.ongoingStatus = education.ongoingStatus;
    this.startDate = education.startDate;
    this.endDate = education.endDate;
    this.description = education.description;
    this.degree = education.degree;
    this.fieldOfStudy = education.fieldOfStudy;
    this.updateId = updateId;
    console.log('update id : ', updateId);
    this.editMode = true;
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
    this.addMode = true;
  }

  create() {
    const newEducation = {
      institute: this.institute,
      location: this.location,
      startDate: this.startDate,
      endDate: this.endDate,
      ongoingStatus: this.ongoingStatus,
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

  update() {
    console.log('Update new education as : ');
    // this.startDate = this.startMonth + ' ' + this.startYear;
    // console.log('Start Date : ', this.startDate);
    // this.endDate = this.endMonth + ' ' + this.endYear;
    // console.log('End Date : ', this.endDate);

    const updatedEducation = {
      degree: this.degree,
      fieldOfStudy: this.fieldOfStudy,
      institute: this.institute,
      location: this.location,
      startDate: this.startDate,
      endDate: this.endDate,
      ongoingStatus: this.ongoingStatus,
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
    console.log('in cancel update ---');
    console.log(this.editMode);
    this.editMode = false;
    console.log(this.editMode);
  }

  ngOnInit() {
    this.userService.findLoggedUser()
      .then((user) => {
        this.user = user;
        if (user !== null ) {
          this.educationService.findEducationByUserId()
            .then((educationArray) => {
              console.log('educations array : ', educationArray);
              this.education = educationArray;
            });
        }
      });
  }

}

