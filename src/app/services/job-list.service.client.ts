import * as $ from 'jquery';
export class JobListServiceClient {


  findAllJobs() {
    return $.ajax({
      url: 'https://jobs.github.com/positions.json',
      dataType: 'jsonp'
    });
  }
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
