import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string;
  urlRegister: string;
  urlLoggedUser: string;
  urlUpdateProfile: string;
  urlLogin: string;
  urlPassReset: string;
  urlVerifyUsername: string;
  urlLogout: string;
  urlDeleteProfile: string;

  constructor() {
    let base;
    if (!location.toString().includes('localhost')) {
      base = 'https://whiteboard-middle-tier-node.herokuapp.com';
    } else {
      base = 'http://localhost:5500';
    }
    this.url = base + '/api/user';
    this.urlRegister = base + '/api/register';
    this.urlLoggedUser = base + '/api/profile';
    this.urlUpdateProfile = base + '/api/profile';
    this.urlLogin = base + '/api/login';
    this.urlPassReset = base + '/api/reset';
    this.urlVerifyUsername = base + '/api/verify';
    this.urlLogout = base + '/api/logout';
    this.urlDeleteProfile = base + '/api/delete';
  }

  register(user) {
    return fetch(this.urlRegister, {
      method: 'POST',
      body: JSON.stringify(user),
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

  login(username, password) {
    return fetch(this.urlLogin, {
      method: 'POST',
      body: JSON.stringify({username: username, password: password}),
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


  logout() {
    return fetch(this.urlLogout, {
      method: 'POST',
      credentials: 'include',
    });
  }

  findLoggedUser() {
    return fetch(this.urlLoggedUser, {
      credentials: 'include',
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }


  updateUserProfile(user) {
    return fetch(this.urlUpdateProfile, {
      method: 'PUT',
      body: JSON.stringify(user),
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

  // sendPasswordResetEmail(emailId, pageLink, callback) {
  //   return fetch(this.urlPassReset, {
  //     method: 'POST',
  //     body: emailId + ' ' + pageLink,
  //     // headers: {
  //     //     'content-type': 'application/json'
  //     // }
  //   }).then(callback);
  // }
  //
  // verifyUser(username, callback) {
  //   return fetch(this.urlVerifyUsername + '/' + username).then(response => {
  //     if (response.headers.get('content-type') != null) {
  //       return response.json();
  //     } else {
  //       return null;
  //     }
  //   }).then(callback);
  // }
  //
  // createUser(user) {
  //   console.log(user);
  //   return fetch(this.url, {
  //     method: 'post',
  //     body: JSON.stringify(user),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //
  //   }).then(response => response.json());
  // }
  //
  // findUserById(userId, callback) {
  //   return fetch(this.url + '/' + userId).then(response => response.json()).then(callback);
  // }
  //
  //
  // updateUser(userId, user, callback) {
  //   return fetch(this.url + '/' + userId, {
  //     method: 'PUT',
  //     body: JSON.stringify(user),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   }).then(response => response.json()).then(callback);
  // }
  //
  // deleteUser(userId, callback) {
  //   return fetch(this.url + '/' + userId, {
  //     method: 'DELETE',
  //   }).then(callback);
  // }

}
