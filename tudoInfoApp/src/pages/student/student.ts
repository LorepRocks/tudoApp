import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagePage } from '../message/message';

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  username = window.localStorage.getItem('username');
  students: any = [];
  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

  ngOnInit(){
    this.students = this.navParams.get('data');
  }

  onSelect(student){
    this.navCtrl.push(MessagePage, {data :  student});
  }

}
