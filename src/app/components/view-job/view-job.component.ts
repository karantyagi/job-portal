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
  jobSource: string;
  savedJobApplication = [];
  appliedJobApplication = [];
  alreadySavedCheck: boolean;
  alreadyAppliedCheck: boolean;

  constructor(private jobService: JobListingService, private route: ActivatedRoute,
              private saveJobService: SaveJobService, private userService: UserService) {

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
            this.job.created_at = d.toDateString();
          }
        }
      }).then(() => this.userService.findLoggedUser().then((user) => this.user = user));
      console.log(this.job);
    }
  }

  saveJobId(job) {
    var jobApplication;
    if (job.jobSource === 'github') {
      jobApplication = {dateApplied: new Date(), status: 'save', jobSource: job.jobSource, gitHubJobId: job.id};
    } else {
      jobApplication = {dateApplied: new Date(), status: 'save', jobSource: job.jobSource, jobPosting: job._id};
    }

    this.saveJobService.createJobApplication(jobApplication).then(() => {

    });

  }

  ngOnInit() {
  }

}
