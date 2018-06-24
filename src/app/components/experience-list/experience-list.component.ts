import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ExperienceService} from '../../services/experience.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {

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
  experience;
  title;
  company;
  location;
  startDate;
  startMonth = 'month';
  startYear = 'year';
  endMonth = 'month';
  endYear = 'year';
  endDate;
  ongoingStatus; // present working on this job
  description;
  updateId = '';
  experiences = [];
  // experiences = [
  //   { _id: 1,
  //     title: 'Software Engineering Intern',
  //     company: 'Google',
  //     location: 'Palo Alto, Califoria',
  //     startDate: 'January 2018',
  //     endDate: 'April 2018',
  //     ongoingStatus: 'false',
  //     description: 'It was an awesome experience interning at Google.'
  //   },
  //   { _id: 2,
  //     title: 'Machine Learning Intern',
  //     company: 'Google',
  //     location: 'Palo Alto, Califoria',
  //     startDate: 'January 2018',
  //     endDate: 'April 2018',
  //     ongoingStatus: 'false',
  //     description: 'It was an awesome experience interning at Google.'
  //   }
  // ];

  constructor(private userService: UserService,
              private experienceService: ExperienceService) {
  }

  edit(experience, updateId) {
    this.title = experience.title;
    this.company = experience.company;
    this.location = experience.location;
    this.ongoingStatus = experience.ongoingStatus;
    this.startDate = experience.startDate;
    this.endDate = experience.endDate;
    this.description = experience.description;
    this.updateId = updateId;
    console.log('update id : ', updateId);
    this.editMode = true;
  }

  setStartMonth(month) {
    this.startMonth = month;
    console.log(month);
  }

  setEndMonth(month) {
    this.endMonth = month;
  }

  setStartYear(yyyy) {
    this.startYear = yyyy;
  }

  setEndYear(yyyy) {
    this.endYear = yyyy;
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
    const newExperience = {
      title: this.title,
      company: this.company,
      location: this.location,
      // startDate: this.startDate,
      // endDate: this.endDate,
      ongoingStatus: this.ongoingStatus,
      description: this.description
    };
    this.experienceService.createExperience(newExperience)
      .then((response) => {
        console.log('Add new experience : ', response);
        this.experienceService.findExperienceByUserId()
          .then((experiences) => {
            console.log('Experiences array : ', experiences);
            this.experiences = experiences;
          });
      });
    this.addMode = false;
  }

  delete(id) {
    this.experienceService.deleteExperience(id)
      .then((response) => {
        this.experienceService.findExperienceByUserId()
          .then((experiences) => {
            console.log('Experiences array : ', experiences);
            this.experiences = experiences;
          });
      });
  }

  update() {
    console.log('Update new experience as : ');
    this.startDate = this.startMonth + ' ' + this.startYear;
    console.log('Start Date : ', this.startDate);
    this.endDate = this.endMonth + ' ' + this.endYear;
    console.log('End Date : ', this.endDate);
    const updatedExperience = {
      title: this.title,
      company: this.company,
      location: this.location,
      // startDate: this.startDate,
      // endDate: this.endDate,
      ongoingStatus: this.ongoingStatus,
      description: this.description
    };
    this.editMode = false;
    this.experienceService.updateExperience(this.updateId, updatedExperience)
      .then((response) => {
        // console.log('Updated in DB : ', response);
        this.experienceService.findExperienceByUserId()
          .then((experiences) => {
            console.log('Experiences array : ', experiences);
            this.experiences = experiences;
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
        if (user !== null) {
          this.experienceService.findExperienceByUserId()
            .then((experiences) => {
              console.log('Experiences array : ', experiences);
              this.experiences = experiences;
            });
        }
      });
  }

}
