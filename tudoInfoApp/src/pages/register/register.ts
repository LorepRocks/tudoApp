import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private api: ApiProvider ,  public alertCrtl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  close(){
    this.navCtrl.setRoot(LoginPage);
  }

  save(formLogic){
    console.log('formLogic', formLogic);
    this.api.registerAttendant(formLogic.value).subscribe(data => {
      let alert = this.alertCrtl.create({
        title: 'Info',
        subTitle: data.message,
        buttons: ['OK']
      })
      alert.present();
    })
  }

}
