import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  baseUrl: String = 'http://192.168.0.9:3360/api/'

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  createAutorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', window.localStorage.getItem('token'));
  }

  login(data) {
    console.log(data);
    return this.http.post(this.baseUrl + 'searchUser', data).map(this.extractData);
  }

  isLogged() {
    if (window.localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  logout() {
    window.localStorage.removeItem('token');
    return true;
  }

  setUserData(data){
    window.localStorage.setItem('username', data.firstname + ' '+ data.lastname);
    window.localStorage.setItem('profile', data.profileId.toString());
    window.localStorage.setItem('identity',data.cc);
  }

  private extractData(response) {
    if (response.auth) {
      window.localStorage.setItem('token', response.token);
    }
    return response || {};
  }
}
