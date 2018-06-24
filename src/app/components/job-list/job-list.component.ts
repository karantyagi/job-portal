import {Component, OnInit} from '@angular/core';
import {Job} from '../../models/Job';
import {ActivatedRoute} from '@angular/router';
import {JobListingService} from '../../services/job-listing.service';


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
  filterItems = [];
  states = [];
  // states = ['Alaska',
  //   'Alabama',
  //   'Arkansas',
  //   'American Samoa',
  //   'Arizona',
  //   'California',
  //   'Colorado',
  //   'Connecticut',
  //   'District of Columbia',
  //   'Delaware',
  //   'Florida',
  //   'Georgia',
  //   'Guam',
  //   'Hawaii',
  //   'Iowa',
  //   'Idaho',
  //   'Illinois',
  //   'Indiana',
  //   'Kansas',
  //   'Kentucky',
  //   'Louisiana',
  //   'Massachusetts',
  //   'Maryland',
  //   'Maine',
  //   'Michigan',
  //   'Minnesota',
  //   'Missouri',
  //   'Mississippi',
  //   'Montana',
  //   'North Carolina',
  //   'North Dakota',
  //   'Nebraska',
  //   'New Hampshire',
  //   'New Jersey',
  //   'New Mexico',
  //   'Nevada',
  //   'New York',
  //   'Ohio',
  //   'Oklahoma',
  //   'Oregon',
  //   'Pennsylvania',
  //   'Puerto Rico',
  //   'Rhode Island',
  //   'South Carolina',
  //   'South Dakota',
  //   'Tennessee',
  //   'Texas',
  //   'Utah',
  //   'Virginia',
  //   'Virgin Islands',
  //   'Vermont',
  //   'Washington',
  //   'Wisconsin',
  //   'West Virginia',
  //   'Wyoming'];

  constructor(private service: JobListingService, private route: ActivatedRoute) {

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

  setVal(location) {
    this.location = location;
    this.filterCriteria['location'] = location;
    this.filterItems =  this.filterItems.filter((obj) => obj.type!= 'location' );
    this.filterItems.push({type: 'location' , val: location});
    this.searchJob();

  }

  setCompany(company) {
    this.company = company;
    this.filterCriteria['company'] = company;
    this.filterItems =  this.filterItems.filter((obj) => obj.type!= 'company' );
    this.filterItems.push({type: 'company' , val: company});
    this.searchJob();

  }

  setJobType(type) {
    this.type = type;
    this.filterCriteria['type'] = type;
    this.filterItems =  this.filterItems.filter((obj) => obj.type!= 'type' );
    this.filterItems.push({type: 'type' , val: type});
    this.searchJob();
  }

  removeItems(item, i) {
    this.filterItems.splice(i, 1 ) ;
    delete this.filterCriteria[item.type];
    this.searchJob();
  }

  searchJob() {
    this.service.findAllJobs().then(jobs => {
      this.jobs = jobs;
      this.jobs.forEach((job, index) => {
        const d = new Date(job.created_at);
        job.created_at = d.toDateString();
        job.jobSource = 'github';
        // this.jobs[index] = job;
      })
      this.companyList = this.jobs.map(item => item.company)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.typeList = this.jobs.map(item => item.type)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.states = this.jobs.map(item => item.location)
        .filter((value, index, self) => self.indexOf(value) === index);
    }).then(() => {
      for (const filter in this.filterCriteria) {
        if (1 === 1) {
          console.log(this.filterCriteria[filter]);
          console.log(filter);
          this.jobs = this.jobs.filter((value) => value[filter] === this.filterCriteria[filter]);
          console.log(this.jobs);
        }
      }
    });

    console.log(this.jobs);

  }


  fetchAllJobs() {
    this.service.findAllJobs().then(jobs => {
      this.jobs = jobs;
      this.jobs.forEach((job, index) => {
        const d = new Date(job.created_at);
        job.created_at = d.toDateString();
        job.jobSource = 'github';
        // this.jobs[index] = job;
      })
      this.companyList = this.jobs.map(item => item.company)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.typeList = this.jobs.map(item => item.type)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.states = this.jobs.map(item => item.location)
        .filter((value, index, self) => self.indexOf(value) === index);
    });

  }

  fetchFilteredJobs(location, keyword) {
    this.service.findFilteredJobs(location, keyword).then(jobs => {
      this.jobs = jobs;
      this.jobs.forEach((job, index) => {
        const d = new Date(job.created_at);
        job.created_at = d.toDateString();
        job.jobSource = 'github';
        // this.jobs[index] = job;
      });
      this.companyList = this.jobs.map(item => item.company)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.typeList = this.jobs.map(item => item.type)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.states = this.jobs.map(item => item.location)
        .filter((value, index, self) => self.indexOf(value) === index);
    });
  }

  ngOnInit() {
  }

}
