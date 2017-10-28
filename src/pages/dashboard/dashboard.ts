import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeacherPage } from '../teacher/teacher';
import { CommentsPage } from '../comments/comments';
import { UsuarioService } from '../../domain/usuario/usuario-service';
import { HomePage } from '../home/home';
import { ShowteacherPage } from '../showteacher/showteacher';
import { SettingPage } from '../setting/setting';
import { StatsPage } from '../stats/stats';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  
  public user_name: any;
  
  public is_Teacher: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _service: UsuarioService) {
    this.setUserName();
    this.setUserTeacher();
  }
  
  toTeacher(){
    this.navCtrl.push(TeacherPage);
  }
  toComments(){
    this.navCtrl.push(CommentsPage);
  }
  
  toSetting(){
    this.navCtrl.push(SettingPage);
  }
  toStats(){
    this.navCtrl.push(StatsPage);
  }
  
 logout(){
   console.log('entrou');
   this._service.logout();
   this.navCtrl.setRoot(HomePage);
 }
 toShow(){
   this.navCtrl.push(ShowteacherPage);
 }
 setUserName(){
    this._service.getCurretUserName().then((result) => {
      this.user_name = result;
    }, (err) => {
      console.log(err);
    });
  }
  
  setUserTeacher(){
    this._service.getUsuario().then((result) => {
      if (result){
        this.is_Teacher = true;  
      }else{
        this.is_Teacher = false;
      } 

    }, (err) => {
      console.log(err);
    });
  }

}
