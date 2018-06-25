import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Router} from '@angular/router';
import {SaveJobService} from '../../services/save-job.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model.client';

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
  recruiters = [];
  user = new User();
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

  constructor(private router: Router, private jobApplicationService: SaveJobService, private userService: UserService) {

  }


  setVal(val) {
    this.location = val;
  }

  getInputVal() {
    return this.location;
  }


  getJobApplication() {

    this.jobsSaved = 0;
    this.jobsApplied = 0;
    this.savedApplication = [];
    this.appliedApplication = [];

    this.jobApplicationService.getAllJobApplicationForUser().then((application) => {

      if (application.status != null && application.status === 'session expired') {
        this.allApplications = [];
      } else {
        this.allApplications = application;
      }
    }).then(() => {
      console.log(this.allApplications);
      this.allApplications.forEach((jobApp) => {
        if (jobApp.jobSource === 'github') {
          jobApp['id'] = jobApp.gitHubJobId;
        } else {
          jobApp['id'] = jobApp.jobPosting;
        }

        jobApp.dateApplied = new Date(jobApp.dateApplied).toDateString();

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

  ngOnInit() {
    this.getJobApplication();
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    this.userService.findLoggedUser().then((user) =>
      this.user = user).then(() => this.userService.findAllUsers().then((users) => {
        this.recruiters = users.filter((user) =>
          user.role === 'Recruiter' && user.requestStatus === 'Verified'
        );
      }
    ));
  }

  addPremium() {
    this.userService.updateUserProfile({premiumRequestStatus: 'Pending'}).then(() =>
      this.getLoggedInUser());
  }


  // saveJobId(job) {
  //   let jobApplication;
  //   console.log(job.jobSource);
  //   if (job.jobSource === 'github') {
  //     jobApplication = {dateApplied: new Date(), status: 'save', jobSource: job.jobSource, gitHubJobId: job.id,
  //       location: job.location, title: job.title, company: job.company};
  //   } else {
  //     jobApplication = {dateApplied: new Date(), status: 'save', jobSource: job.jobSource, jobPosting: job._id,
  //       location: job.location, title: job.title, company: job.company};
  //   }
  //   this.jobApplicationService.createJobApplication(jobApplication).then(() => this.getJobApplication());
  // }

  deleteJobId(job) {

    let id;
    if (job.jobSource === 'github') {
      id = job.id;
    } else {
      id = job._id;
      console.log(id);
      console.log(job.id);
      console.log(job.jobSource);
    }
    this.jobApplicationService.deleteJobApplicationByJobPosting(id, job.jobSource).then(() => this.getJobApplication());
  }

  applyJob(job) {
    let jobApplication;
    console.log(job.jobSource);
    if (job.jobSource === 'github') {
      jobApplication = {
        dateApplied: new Date(), status: 'applied', jobSource: job.jobSource, gitHubJobId: job.id,
        location: job.location, title: job.title, company: job.company
      };
    } else {
      jobApplication = {
        dateApplied: new Date(), status: 'applied', jobSource: job.jobSource, jobPosting: job._id,
        location: job.location, title: job.title, company: job.company
      };
    }

    let id;
    if (job.jobSource === 'github') {
      id = job.id;
    } else {
      id = job._id;
    }


    this.jobApplicationService.deleteJobApplicationByJobPosting(id, job.jobSource).then(() =>
      this.jobApplicationService.createJobApplication(jobApplication).then(() => this.getJobApplication()));
  }

}
