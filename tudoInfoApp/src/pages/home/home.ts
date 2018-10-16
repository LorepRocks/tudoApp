import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController, private auth: AuthProvider) {

  }
  username: string = window.localStorage.getItem('username');
  profile: string = window.localStorage.getItem('profile') === '1' ? 'teacher' : 'parent';

  logout(){
    console.log("Cerrando sesion");
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  ngOnInit(){
    if(this.profile === 'teacher'){
      
    }
  }

}
