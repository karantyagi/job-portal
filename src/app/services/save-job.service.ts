import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveJobService {

  url: string;
  constructor() {
    let base;
    if (!location.toString().includes('localhost')) {
      base = 'https://job-portal-server.herokuapp.com';
    } else {
      base = 'http://localhost:5500';
    }
    this.url = base + '/api/application';
  }
}
