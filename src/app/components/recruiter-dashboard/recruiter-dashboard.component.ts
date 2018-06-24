import {Component, OnInit} from '@angular/core';
import {JobListingService} from '../../services/job-listing.service';
import {ActivatedRoute} from '@angular/router';
import {SaveJobService} from '../../services/save-job.service';
import {Job} from '../../models/Job';
import {JobPostingService} from '../../services/job-posting.service';

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css']
})
export class RecruiterDashboardComponent implements OnInit {

  job: Job = new Job();
  jobId: string;
  jobPostings = []
  moreDetails = false;
  sAddMode = false;
  sEditMode = false;
  rAddMode = false;
  rEditMode = false;
  qAddMode = false;
  qEditMode = false;
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
              private saveJobService: SaveJobService, private jobPostService: JobPostingService) {

    this.route.params.subscribe(param => {
      this.jobId = param['jobId'];
    });

    console.log(this.jobId);

    if (this.jobId != null) {
      this.jobService.findAllJobs().then(jobs => {

        for (const j in jobs) {
          if (jobs[j].id === this.jobId) {
            const d = new Date(jobs[j].created_at);
            this.job = jobs[j];
            this.job.created_at = d.toDateString();
          }
        }
      });
      console.log(this.job);
    }
  }

  getJobPostingOfCurrentUser() {
    this.jobPostService.getAllJobPostingForUser().then((jobPostings) => {
      this.jobPostings = jobPostings;
    });
  }

  saveJobId(id) {
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

  saveJob() {
    console.log(this.responsibilities);
  }

  ngOnInit() {
    this.getJobPostingOfCurrentUser();
  }

}
