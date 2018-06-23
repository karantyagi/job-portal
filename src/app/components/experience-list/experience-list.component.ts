import {Component, OnInit} from '@angular/core';

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

  title;
  company;
  location;
  startDate;
  endDate;
  ongoingStatus: String; // present working on this job
  description;

  experiences = [
    { _id: 1,
      title: 'Software Engineering Intern',
      company: 'Google',
      location: 'Palo Alto, Califoria',
      startDate: 'January 2018',
      endDate: 'April 2018',
      ongoingStatus: 'false',
      description: 'It was an awesome experience interning at Google.'
    },
    { _id: 2,
      title: 'Machine Learning Intern',
      company: 'Google',
      location: 'Palo Alto, Califoria',
      startDate: 'January 2018',
      endDate: 'April 2018',
      ongoingStatus: 'false',
      description: 'It was an awesome experience interning at Google.'
    }
  ];

  constructor() {
  }

  edit(experience) {
    this.title = experience.title;
    this.company = experience.company;
    this.location = experience.location;
    this.ongoingStatus = experience.ongoingStatus;
    this.startDate = experience.startDate;
    this.endDate = experience.endDate;
    this.description = experience.description;
    this.editMode = true;
  }

  check() {
    console.log(this.ongoingStatus);
  }

  add() {
    this.addMode = true;
  }

  create() {
    const newExperience = {
        _id: this.experiences[this.experiences.length - 1]._id + 1,
        title: this.title,
        company: this.company,
        location: this.location,
        startDate: this.startDate,
        endDate: this.endDate,
        ongoingStatus: this.ongoingStatus,
        description: this.description
      };
    // this.experiences.push(newExperience);
    console.log('Add new experience : \n', newExperience);
    this.addMode = false;
  }

  update() {
    console.log('Updated new experience !');
    this.editMode = false;
  }

  cancelAdd() {
    this.addMode = false;
  }

  cancelEdit() {
    this.editMode = false;
  }

  ngOnInit() {
  }

}
