import {Component, OnInit} from '@angular/core';
import {JobListServiceClient} from './../../services/job-list.service.client';
import {Job} from '../../models/Job';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  location: string;
  jobs: Job[] = [];
  type: string;
  typeList: string[];
  company: string;
  companyList: string[];
  keywordOrTitle: string;
  filterCriteria = {};
  states = ['Alaska',
    'Alabama',
    'Arkansas',
    'American Samoa',
    'Arizona',
    'California',
    'Colorado',
    'Connecticut',
    'District of Columbia',
    'Delaware',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Iowa',
    'Idaho',
    'Illinois',
    'Indiana',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Massachusetts',
    'Maryland',
    'Maine',
    'Michigan',
    'Minnesota',
    'Missouri',
    'Mississippi',
    'Montana',
    'North Carolina',
    'North Dakota',
    'Nebraska',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'Nevada',
    'New York',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Virginia',
    'Virgin Islands',
    'Vermont',
    'Washington',
    'Wisconsin',
    'West Virginia',
    'Wyoming'];

  constructor(private service: JobListServiceClient, private route: ActivatedRoute) {

    let location = ' ';
    this.route.params.subscribe(param => {
      location = param['location'];
    });
    let keyword = ' ';
    this.route.params.subscribe(param => {
      keyword = param['keyword'];
    });

    console.log(location);
    console.log(keyword);

    if (location !== ' ' || keyword !== ' ') {
      this.fetchFilteredJobs(location, keyword);
    } else {
      this.fetchAllJobs();
    }
  }

  setVal(val) {
    this.location = val;
    this.filterCriteria['location'] = val;

  }

  setCompany(company) {
    this.company = company;
    this.filterCriteria['company'] = company;
  }

  setJobType(type) {
    this.type = type;
    this.filterCriteria['type'] = type;
  }

  searchJob() {
     this.service.filteredSearch(this.filterCriteria).then(jobs => {
       this.jobs = jobs;
       this.companyList = this.jobs.map(item => item.company)
         .filter((value, index, self) => self.indexOf(value) === index);
       this.typeList = this.jobs.map(item => item.type)
         .filter((value, index, self) => self.indexOf(value) === index);
     });
  }


  fetchAllJobs() {
    this.service.findAllJobs().then(jobs => {
      this.jobs = jobs;
      this.companyList = this.jobs.map(item => item.company)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.typeList = this.jobs.map(item => item.type)
        .filter((value, index, self) => self.indexOf(value) === index);
    });
  }

  fetchFilteredJobs(location, keyword) {
    this.service.findFilteredJobs(location, keyword).then(jobs => {
      this.jobs = jobs;
      this.companyList = this.jobs.map(item => item.company)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.typeList = this.jobs.map(item => item.type)
        .filter((value, index, self) => self.indexOf(value) === index);
    });
  }

  ngOnInit() {
  }

}
