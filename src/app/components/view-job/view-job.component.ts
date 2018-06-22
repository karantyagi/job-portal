import {Component, OnInit} from '@angular/core';
import {Job} from '../../models/Job';
import {ActivatedRoute} from '@angular/router';
import {JobListingService} from '../../services/job-listing.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {

  job: Job = new Job();
  jobId: string;

  constructor(private jobService: JobListingService, private route: ActivatedRoute) {

    this.route.params.subscribe(param => {
      this.jobId = param['jobId'];
    });

    console.log(this.jobId);

    if (this.jobId != null) {
      this.jobService.findAllJobs().then(jobs => {

        for (const j in jobs) {
          if (jobs[j].id === this.jobId) {
            this.job = jobs[j];
          }
        }
      });
      console.log(this.job);
    }
  }

  ngOnInit() {
  }

}
