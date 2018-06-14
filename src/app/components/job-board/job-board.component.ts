import {Component, OnInit} from '@angular/core';
// import * as $ from 'jquery';
// import {} from '@types/googlemaps';
import {Pipe, PipeTransform} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.css']
})
export class JobBoardComponent implements OnInit {

  keywordOrTitle: string;
  location: string;
  states = ['Alaska',
    'Alabama',
    'Arkansas',
    'American Samoa',
    'Arizona',
    'California',
    'Colorado',
    'Connecticut',
    'District of Columbia',
    'Delaware',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Iowa',
    'Idaho',
    'Illinois',
    'Indiana',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Massachusetts',
    'Maryland',
    'Maine',
    'Michigan',
    'Minnesota',
    'Missouri',
    'Mississippi',
    'Montana',
    'North Carolina',
    'North Dakota',
    'Nebraska',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'Nevada',
    'New York',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Virginia',
    'Virgin Islands',
    'Vermont',
    'Washington',
    'Wisconsin',
    'West Virginia',
    'Wyoming'];

  constructor(private router: Router, ) {
  }

  // searchBasedOn() {
  //
  //   this.router.navigate(['job-list/+'location'+]);
  //
  // }

  setVal(val) {
    this.location = val;
  }

  getInputVal() {
    return this.location;
  }

  ngOnInit() {

  }
}

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, search: string): any {
    if (!search) {
      return value;
    }
    const solution = value.filter(v => {
      if (!v) {
        return;
      }
      return v.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    return solution;
  }
}
