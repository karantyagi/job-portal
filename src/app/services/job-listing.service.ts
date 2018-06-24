import { Injectable } from '@angular/core';
import * as $ from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class JobListingService {

  constructor() { }


  findAllJobs() {
    return $.ajax({
      url: 'https://jobs.github.com/positions.json?markdown=true',
      dataType: 'jsonp'
    });
  }

  findFilteredJobs(location, keyword) {
    console.log('service');
    return $.ajax({
      url: 'https://jobs.github.com/positions.json?description=' + keyword + '&location=' + location,
      dataType: 'jsonp'
    });
  }


  findAllJobPortalJobs(){

  }
}
