import {Component, OnInit} from '@angular/core';
import {JobListServiceClient} from '../services/job-list.service.client';
import {Job} from '../models/Job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  constructor(private service: JobListServiceClient) {
    // this.jobs = new
  }

  jobs: Job[] = [];

  fetchJobs(j) {
    console.log(j);
    // for (let i = 0; i < jobs.length; i++) {
    //     this.jobs.push(jobs[i]);
    // }
    jobs = j;
    console.log(this);
    console.log(this.jobs.length);
    }

  ngOnInit() {
    // this.service.findAllJobs(this.fetchJobs);
    this.service.findAllJobs().then(jobs => this.jobs = jobs);
  }

}
