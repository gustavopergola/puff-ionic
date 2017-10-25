import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeacherPage } from '../teacher/teacher';
import { CommentsPage } from '../comments/comments';
import { UsuarioService } from '../../domain/usuario/usuario-service';

import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  public user_name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _service: UsuarioService) {
  }
  
  toTeacher(){
    this.navCtrl.push(TeacherPage);
  }
  toComments(){
    this.navCtrl.push(CommentsPage);
  }
 logout(){
   this.navCtrl.setRoot(HomePage);
 }
 
 setUserName(){
    this._service.getCurretUserName().then((result) => {
      alert(result);
      //this.user_name = result;
    }, (err) => {
      console.log(err);
    });
  }

}
