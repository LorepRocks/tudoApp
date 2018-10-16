import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { LoginPage } from '../login/login';
/**
 * Generated class for the AttendantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendant',
  templateUrl: 'attendant.html',
})
export class AttendantPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {
  }
  messages:any = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendantPage');
  }

  logout(){
    console.log("Cerrando sesion");
    this.navCtrl.setRoot(LoginPage);
  }

  ngOnInit(){
    const attendantId = {attendantId : window.localStorage.getItem('identity')}
    this.api.getMessages(attendantId).subscribe(data => {
      console.log('data', data);
      this.messages = data.message;
    });
    console.log(' this.messages',  this.messages);
  }

  openMessage(message){
    const data = {messageId : message.id};
    message.isOpen = true;
    this.api.updateMessage(data).subscribe(data => {
      console.log('Actualización de Mensajes', data);
    });
  }

}
