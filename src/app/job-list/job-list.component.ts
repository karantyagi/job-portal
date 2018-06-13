import {Component, OnInit} from '@angular/core';
import {JobListServiceClient} from '../services/job-list.service.client';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  constructor(private service: JobListServiceClient) {
  }

  jobs = [];

  ngOnInit() {
    this.service.findAllJobs();
      // .then(jobs => this.jobs = jobs);
  }

}
