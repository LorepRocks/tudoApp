import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StudentPage } from '../student/student';
import { LoginPage } from '../login/login';
/**
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html',
})
export class TeacherPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {
  }
  courses:any = [];
  username = window.localStorage.getItem('username');



  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherPage');
  }

  ngOnInit(){
    let data = {cc : window.localStorage.getItem('identity')};
    this.api.getInfoTeacher(data).subscribe( data => {
        this.courses = data.message.course;

        console.log('courses', data);
    });
  }
  
   onSelect(course){
     this.navCtrl.push(StudentPage , {data: course.students});
   }

   logout(){
    console.log("Cerrando sesion");
    this.navCtrl.setRoot(LoginPage);
  }
}
