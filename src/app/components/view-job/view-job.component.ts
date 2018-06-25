import {Component, OnInit} from '@angular/core';
import {Job} from '../../models/Job';
import {ActivatedRoute} from '@angular/router';
import {JobListingService} from '../../services/job-listing.service';
import {SaveJobService} from '../../services/save-job.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model.client';
import {JobPostingService} from '../../services/job-posting.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {

  job: Job = new Job();
  jobId: string;
  user = null;
  jobSource: string;
  jobApplications = [];
  alreadySavedCheck = false;
  alreadyAppliedCheck = false;
  postings = [];
  isMainDivVisible = false;
  isSecondaryDivVisible = false;
  moreDetails = false;
  sAddMode = false;
  rAddMode = false;
  qAddMode = false;
  skillsRequired = [];
  skill = '';
  responsibilities = [];
  responsibility = '';
  minQualifications = [];
  qualification = '';
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


  constructor(private jobService: JobListingService, private route: ActivatedRoute,
              private saveJobService: SaveJobService, private userService: UserService,
              private jobPosting: JobPostingService) {

    this.route.params.subscribe(param => {
      const detail = param['jobId'].split('|');
      this.jobId = detail[0];
      this.jobSource = detail[1];
    });


    if (this.jobId != null) {
      this.jobService.findAllJobs().then(jobs => {

        for (const j in jobs) {
          if (jobs[j].id === this.jobId) {
            const d = new Date(jobs[j].created_at);
            this.job = jobs[j];
            this.job.jobSource = this.jobSource;
            this.job.created_at = d.toDateString();
          }
        }
        // console.log(this.job);
      }).then(() => jobPosting.getAllJobPostings().then((postings) => {
        console.log(postings);
        this.postings = postings;
        this.postings.forEach((posting) => {
            if (posting._id === this.jobId ) {
              this.job = posting;
              this.job.jobSource = this.jobSource;
            }
        });
      }).then(() => this.userService.findLoggedUser().then((user) => this.user = user)).then(() =>
        this.getJobApplication()
      ));

    }
  }


  getJobApplication() {
    this.saveJobService.getAllJobApplicationForUser().then((jobApplications) => {
    if (jobApplications.status != null &&  jobApplications.status === 'session expired') {
      this.jobApplications = [];
    } else {
      this.jobApplications = jobApplications;
    }
    }).then(() => {
        console.log(this.jobApplications);
      this.jobApplications.forEach((jobApp) => {
        if (this.jobSource === 'github' &&
          jobApp.gitHubJobId === this.jobId) {
          if (jobApp.status === 'save') {
            this.alreadySavedCheck = true;
          } else {
            this.alreadyAppliedCheck = true;
          }

        } else if (this.jobSource !== 'github' &&
          jobApp.jobPosting === this.jobId) {
          if (jobApp.status === 'save') {
            this.alreadySavedCheck = true;
          } else {
            this.alreadyAppliedCheck = true;
          }
        }
      });

    });
  }

  saveJobId(job) {
    let jobApplication;
    console.log(job.jobSource);
    if (job.jobSource === 'github') {
      jobApplication = {dateApplied: new Date(), status: 'save', jobSource: job.jobSource, gitHubJobId: job.id,
        location: job.location, title: job.title, company: job.company};
    } else {
      jobApplication = {dateApplied: new Date(), status: 'save', jobSource: job.jobSource, jobPosting: job._id,
        location: job.location, title: job.title, company: job.company};
    }

    this.alreadySavedCheck = false;
    this.alreadyAppliedCheck = false;

    this.saveJobService.createJobApplication(jobApplication).then(() => this.getJobApplication());
  }

  deleteJobId(job) {
    this.alreadySavedCheck = false;
    this.alreadyAppliedCheck = false;
    let id;
    if (job.jobSource === 'github') {
      id = job.id;
    } else {
      id = job._id;
    }
    this.saveJobService.deleteJobApplicationByJobPosting(id, job.jobSource).then(() => this.getJobApplication());
  }

  applyJob(job) {
    let jobApplication;
    console.log(job.jobSource);
    if (job.jobSource === 'github') {
      jobApplication = {dateApplied: new Date(), status: 'applied', jobSource: job.jobSource, gitHubJobId: job.id,
        location: job.location, title: job.title, company: job.company};
    } else {
      jobApplication = {dateApplied: new Date(), status: 'applied', jobSource: job.jobSource, jobPosting: job._id,
        location: job.location, title: job.title, company: job.company};
    }

    let id;
    if (job.jobSource === 'github') {
      id = job.id;
    } else {
      id = job._id;
    }

    this.alreadySavedCheck = false;
    this.alreadyAppliedCheck = false;

    this.saveJobService.deleteJobApplicationByJobPosting(id, job.jobSource).then(() =>
      this.saveJobService.createJobApplication(jobApplication).then(() => this.getJobApplication()));
  }

  addMoreDetails() {
    this.moreDetails = true;
  }

  toggleRAddMode() {
    this.rAddMode = !this.rAddMode;
  }

  toggleSAddMode() {
    this.sAddMode = !this.sAddMode;
  }

  toggleQAddMode() {
    this.qAddMode = !this.qAddMode;
  }

  cancelAddR() {
    this.toggleRAddMode();
  }

  cancelAddS() {
    this.toggleSAddMode();
  }

  cancelAddQ() {
    this.toggleQAddMode();
  }


  ngOnInit() {
  }

}
