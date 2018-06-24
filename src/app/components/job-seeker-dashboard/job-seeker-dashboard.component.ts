import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Router} from '@angular/router';
import {SaveJobService} from '../../services/save-job.service';

@Component({
  selector: 'app-job-seeker-dashboard',
  templateUrl: './job-seeker-dashboard.component.html',
  styleUrls: ['./job-seeker-dashboard.component.css']
})
export class JobSeekerDashboardComponent implements OnInit {

  keywordOrTitle: string;
  location: string;
  jobsSaved = 0;
  jobsApplied = 0;
  savedApplication = [];
  appliedApplication = [];
  allApplications = [];
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

  constructor(private router: Router, private jobApplicationService: SaveJobService) {
  }


  setVal(val) {
    this.location = val;
  }

  getInputVal() {
    return this.location;
  }

  ngOnInit() {

    this.jobApplicationService.getAllJobApplicationForUser().then((application) => {

      if (application.status != null && application.status === 'session expired') {
        this.allApplications = [];
      } else {
        this.allApplications = application;
      }
    }).then(() => {
      console.log(this.allApplications);
      this.allApplications.forEach((jobApp) => {
        if (jobApp.status === 'save') {
          this.savedApplication.push(jobApp);
        } else {
          this.appliedApplication.push(jobApp);
        }
      });

    }).then(() => {
      this.jobsApplied = this.appliedApplication.length;
      this.jobsSaved = this.savedApplication.length;

    });
  }
}
