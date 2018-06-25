import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecruiterDetailService {

  url: string;

  constructor() {
    let base;
    if (!location.toString().includes('localhost')) {
      base = 'https://job-portal-server.herokuapp.com';
    } else {
      base = 'http://localhost:5500';
    }
    this.url = base + '/api/recruiter';
  }

  findRecruiterDetailsByUserId() {
    return fetch(this.url + '/user', {
      credentials: 'include',
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }

  updateRecruiterDetail(recruiterId, recruiter) {
    // console.log(JSON.stringify(user));
    return fetch(this.url + '/' + recruiterId, {
      method: 'PUT',
      body: JSON.stringify(recruiter),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => {
      return response.json();
    });
  }

  createRecruiterDetail(recruiterDetail) {
    // console.log(JSON.stringify(user));
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(recruiterDetail),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => {
      return response.json();
    });
  }

  deleteRecruiterDetail(Id) {
    return fetch(this.url + '/' + Id, {
      method: 'DELETE',
      credentials: 'include'
    });
  }

}
