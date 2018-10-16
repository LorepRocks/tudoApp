import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { TeacherPage } from '../teacher/teacher';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider, public alertCrtl: AlertController) {
  }
  attendantName: string ;
  studentName: string;
  attendantId: number;
  studentId: number;
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }
  
  ngOnInit(){
    let data = this.navParams.get('data');
    console.log('data', data);
    this.attendantName = data.attendant.firstname + ' ' + data.attendant.lastname;
    this.studentName = data.firstname + ' ' + data.lastname;
    this.attendantId = data.attendant.id;
    this.studentId = data.id;

  }

  sendMessage(formLogic){
    console.log('data',formLogic.value);
    let message = {
      content : formLogic.value.content,
      attendantId : this.attendantId,
      studentId : this.studentId,
      teacherId: window.localStorage.getItem('identity')
    }
    console.log('message object', message);
    this.api.saveMessage(message).subscribe(data => {
      let alert = this.alertCrtl.create({
        title: 'Info',
        subTitle: data.message,
        buttons: [{ text:'OK',
                  handler: () => {
                    this.navCtrl.setRoot(TeacherPage);
                  }}]
      });
      alert.present();
    });
  }

}
