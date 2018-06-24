import {Component, OnInit} from '@angular/core';
import {Job} from '../../models/Job';
import {ActivatedRoute} from '@angular/router';
import {JobListingService} from '../../services/job-listing.service';
import {SaveJobService} from '../../services/save-job.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model.client';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {

  job: Job = new Job();
  jobId: string;
  user: User;

  constructor(private jobService: JobListingService, private route: ActivatedRoute,
              private saveJobService: SaveJobService, private userService: UserService  ) {

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
      }).then(() => this.userService.findLoggedUser().then((user) => this.user = user));
      console.log(this.job);
    }
  }

  saveJobId(id) {


  }

  ngOnInit() {
  }

}
