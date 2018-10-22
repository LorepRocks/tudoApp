import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { TeacherPage } from "../teacher/teacher";
import { AuthProvider } from "../../providers/auth/auth";
import { AttendantPage } from "../attendant/attendant";
import { RegisterPage } from "../register/register";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, public alertCrtl: AlertController) {
  }

  login(formLogin){
    console.log('formLogin.value',formLogin.value);
    this.auth.login(formLogin.value).subscribe(data => {
      console.log('data', data);
      if(data.message.cc){
        this.auth.setUserData(data.message);
        if(data.message.profileId === 1){
          this.navCtrl.setRoot(TeacherPage);
        }else{
          this.navCtrl.setRoot(AttendantPage);
        }
        
      }else{
        formLogin.password = '';
        let alert = this.alertCrtl.create({
          title: 'Info',
          subTitle: data.message,
          buttons: ['OK']
        })
        alert.present();
      }
    })
  }

  register(){
    this.navCtrl.setRoot(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
