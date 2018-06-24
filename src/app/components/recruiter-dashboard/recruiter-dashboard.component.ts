import { Component, OnInit } from '@angular/core';
import {JobListingService} from '../../services/job-listing.service';
import {ActivatedRoute} from '@angular/router';
import {SaveJobService} from '../../services/save-job.service';
import {Job} from '../../models/Job';

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css']
})
export class RecruiterDashboardComponent implements OnInit {

  job: Job = new Job();
  jobId: string;
  skillsRequired = [];
  responsibilities = [];
  minQualification = [];
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
              private saveJobService: SaveJobService ) {

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

  saveJobId(id) {


  }

  addResponsibility() {
    this.responsibilities.push('');
    console.log('No. of Reponsibilities : ', this.responsibilities.length);
  }

  addMinQualifications() {
    this.minQualification.push('');
    console.log('No. of Qualifications : ', this.minQualification.length);
  }

  addRequiredSkills() {
    this.skillsRequired.push('');
    console.log('No. of Required Skills: ', this.skillsRequired.length);
  }

  ngOnInit() {
  }

}
