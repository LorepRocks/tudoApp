import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  baseUrl: String = 'http://192.168.0.9:3360/api/'

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getInfoTeacher(data){
    console.log('data', data);
    return this.http.post(this.baseUrl + 'getTeacherInfo', data).map(this.extractData)
  }

  private extractData(response) {
    return response || {};
  }

  saveMessage(data){
    return this.http.post(this.baseUrl + 'saveMessage', data).map(this.extractData)
  }

  getMessages(data){
    return this.http.post(this.baseUrl + 'getMessages', data).map(this.extractData);
  }

  updateMessage(data){
    return this.http.post(this.baseUrl + 'updateMessage', data).map(this.extractData);
  }

  registerAttendant(data){
    return this.http.post(this.baseUrl + 'createUser', data).map(this.extractData);
  }

}
