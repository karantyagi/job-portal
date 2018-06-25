import {Component, OnInit} from '@angular/core';
import {JobListingService} from '../../services/job-listing.service';
import {ActivatedRoute} from '@angular/router';
import {SaveJobService} from '../../services/save-job.service';
import {Job} from '../../models/Job';
import {JobPostingService} from '../../services/job-posting.service';
import {JobPostingModelClient} from '../../models/job-posting.model.client';

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css']
})
export class RecruiterDashboardComponent implements OnInit {

  jobPostings: JobPostingModelClient[] = [];
  moreDetails = false;
  sAddMode = false;
  rAddMode = false;
  qAddMode = false;
  skill = '';
  responsibility = '';
  qualification = '';
  jobPost: JobPostingModelClient = new JobPostingModelClient() ;

  constructor(private jobService: JobListingService, private route: ActivatedRoute,
              private saveJobService: SaveJobService, private jobPostService: JobPostingService) {

    this.jobPost.skillsRequired = [];
    this.jobPost.responsibilities = [];
    this.jobPost.minQualification = [];
  }


  getJobPostingOfCurrentUser() {
    this.jobPostService.getAllJobPostingForUser().then((jobPostings) => {
      this.jobPostings = jobPostings;
      this.jobPostings.forEach((jobPost) => {
        if (jobPost != null && jobPost !== undefined && jobPost.datePosted != undefined  ) {
          jobPost['date'] = new Date(jobPost.datePosted).toDateString();
        } else {
          jobPost['date'] = '';
        }
      });

    });
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
    console.log(this.jobPost);
    this.jobPost.datePosted = new Date();
    this.jobPost.jobSource = 'job-portal';
    this.jobPostService.createJobPosting(this.jobPost).then(() => {
        this.getJobPostingOfCurrentUser();
      }
    );
  }

  deleteJobPosting(id) {
    this.jobPostService.deleteJobPosting(id).then(() =>
      this.saveJobService.deleteJobApplicationByJobPosting(id, 'job-portal') ).then(() =>
      this.getJobPostingOfCurrentUser()
    );
  }

  ngOnInit() {
    this.getJobPostingOfCurrentUser();
  }

}
