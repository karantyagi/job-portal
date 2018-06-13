export class JobListServiceClient {
  findAllJobs() {
    return fetch('https://jobs.github.com/positions.json', {
      mode: 'no-cors'
    }).then(response => {
      // console.log(response.body);
      // console.log(response);
      console.log(response);
      return response.body;
      });
  }
}



// export class JobListServiceClient {
//   findAllJobs() {
//     return fetch('https://jobs.github.com/positions.json', {
//       mode: 'no-cors'
//     }).then((response) => response[0]).then((data) => {
//       console.log(data);
//     });
//   }
// }
