import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { TeacherPage } from '../teacher/teacher';
import { ShowteacherPage } from '../showteacher/showteacher';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  
  login(){
    this.navCtrl.push(LoginPage);
  }
  
  register(){
    this.navCtrl.push(RegisterPage);
  }
  indexTeacher(){
    this.navCtrl.push(TeacherPage);
  }
  showTeacher(){
    this.navCtrl.push(ShowteacherPage);
  }
  testMethod(){
    
  }

}
