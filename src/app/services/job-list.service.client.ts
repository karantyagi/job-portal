import * as $ from 'jquery';

export class JobListServiceClient {


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


  filteredSearch(obj) {
    let url = 'https://jobs.github.com/positions.json?';
    for (const o in obj) {
      if (obj[o] === 'Full Time') {
        url = url + o + '=Full%20Time' + '&';
      } else {
        url = url + o + '=' + obj[o] + '&';
      }
    }

    console.log(url);
    return $.ajax({
      url: url,
      dataType: 'jsonp'
    });

  }

  // findJobById(jobId) {
  //   return $.ajax({
  //     url: 'https://jobs.github.com/positions/' + jobId + '.json?markdown=true' ,
  //     dataType: 'jsonp'
  //   });
  // }
}


// import * as $ from 'jquery';
// export class JobListServiceClient {
//
//
//   findAllJobs(callback) {
//     return $.ajax({
//       url: 'https://jobs.github.com/positions.json',
//       dataType: 'jsonp',
//       success: function (res) {
//         console.log('hhgfghf');
//         console.log(res);
//       }
//     });
//   }
// }