import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {

  url: string;
  allJobPostingUrl: string;
  constructor() {
    let base;
    if (!location.toString().includes('localhost')) {
      base = 'https://job-portal-server.herokuapp.com';
    } else {
      base = 'http://localhost:5500';
    }
    this.url = base + '/api/jobPosting';
    this.allJobPostingUrl =  base + '/api/allJobPosting';
  }

  createJobPosting(jobPosting) {
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(jobPosting),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }

  updateJobPosting(jobPostingId, jobPosting) {
    return fetch(this.url + '/' + jobPostingId, {
      method: 'PUT',
      body: JSON.stringify(jobPosting),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }

  deleteJobPosting(jobPostingId) {
    return fetch(this.url + '/' + jobPostingId, {
      method: 'DELETE',
      credentials: 'include'
    });
  }

  getAllJobPostingForUser() {
    return fetch(this.url, {
      credentials: 'include'
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }

  getAllJobPostings() {
    // console.log('in here');
    return fetch(this.allJobPostingUrl, {
      credentials: 'include'
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }

}
