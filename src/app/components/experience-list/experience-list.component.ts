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
  startMonth = 'Month';
  startYear = 'Year';
  endMonth = 'Month';
  endYear = 'Year';
  endDate;
  ongoingStatus: boolean; // present working on this job
  defaultAddOnGoing = false;
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
    if ( experience.ongoingStatus === undefined ) {
      this.ongoingStatus = false;
    } else {
      if ( experience.ongoingStatus === 'true') {
        this.ongoingStatus = true;
      } else {
        this.ongoingStatus = false;
      }
      // console.log('type :', typeof this.ongoingStatus);
    }
    console.log('DB ongoingStatus :', this.ongoingStatus);
    this.title = experience.title;
    this.company = experience.company;
    this.location = experience.location;
    this.startMonth = experience.startDate.month;
    this.endMonth = experience.endDate.month;
    this.startYear = experience.startDate.year;
    this.endYear = experience.endDate.year;
    this.description = experience.description;
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

  getEditMode(updateId) {
    if (this.updateId === updateId && this.editMode === true) {
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

  add() {
    this.title = '';
    this.company = '';
    this.location = '';
    this.startMonth = 'Month';
    this.startYear = 'Year';
    this.endMonth = 'Month';
    this.endYear = 'Year';
    this.defaultAddOnGoing = false; // present working on this job
    this.description = '';
    this.addMode = true;
  }

  create() {
    const newExperience = {
      title: this.title,
      company: this.company,
      location: this.location,
      startDate: {'month' : this.startMonth, 'year' : this.startYear},
      endDate: {'month' : this.endMonth, 'year' : this.endYear},
      ongoingStatus: this.defaultAddOnGoing,
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
    // this.startDate = this.startMonth + ' ' + this.startYear;
    // console.log('Start Date : ', this.startDate);
    // this.endDate = this.endMonth + ' ' + this.endYear;
    // console.log('End Date : ', this.endDate);
    console.log('Updated new ongoing status as : ', !this.ongoingStatus);
    const updatedExperience = {
      title: this.title,
      company: this.company,
      location: this.location,
      startDate: {'month' : this.startMonth, 'year' : this.startYear},
      endDate: {'month' : this.endMonth, 'year' : this.endYear},
      ongoingStatus: !this.ongoingStatus,
      description: this.description
    };
    // console.log('Update new experience as : ');
    // console.log(updatedExperience);
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
    // console.log('in cancel update ---');
    this.editMode = false;
    // console.log(this.editMode);
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
