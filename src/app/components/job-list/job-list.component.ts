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


  jobs: Job[] = [];

  constructor(private service: JobListServiceClient, private route: ActivatedRoute) {

    var location = ' ';
    this.route.params.subscribe(param => {
      location = param['location'];
    });
    var keyword = ' ';
    this.route.params.subscribe(param => {
      keyword = param['keyword'];
    });

    if (location !== ' ' && keyword !== ' ') {
      this.fetchFilteredJobs(location, keyword);
    } else {
      this.fetchAllJobs();
    }
  }

  fetchAllJobs() {
    this.service.findAllJobs().then(jobs => this.jobs = jobs);
  }

  fetchFilteredJobs(location, keyword) {
    this.service.findFilteredJobs(location,keyword).then(jobs => this.jobs = jobs);
  }

  ngOnInit() {
  }

}
