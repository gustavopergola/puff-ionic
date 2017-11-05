import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
=======
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
>>>>>>> af17a751b4d17fee04024433aff1dde68409662d
import { UsuarioService } from '../../domain/usuario/usuario-service';
import {DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = { name: '', reg: '', password: ''};
  
<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _service: UsuarioService, public _alertCtrl: AlertController, 
    private _loadingCtrl: LoadingController) {
  }
  
  salvaUsuario(){
    
    let loader = this._loadingCtrl.create({
      content: "Te cadastrando no nosso banco de dados. Relaxa ai"
    });
    loader.present();

=======
  constructor(public navCtrl: NavController, public navParams: NavParams, private _service: UsuarioService, public _alertCtrl: AlertController) {
  }
  
  salvaUsuario(){
>>>>>>> af17a751b4d17fee04024433aff1dde68409662d
    this._service.saveUser(this.user).then((result) => {
      console.log(result);
        this._service.login(this.user).then((result) => {
          if (result){
            this._service.setCurrentUser(this.user.reg);
<<<<<<< HEAD
            loader.dismiss();
            let alert = this._alertCtrl.create({
              title: 'Olá!',
              subTitle: 'Bem vindo, '+this.user.name+'!',
              buttons: ['Bora!']
              });
              alert.present();
            this.navCtrl.setRoot(DashboardPage);
          }
        }, (err) => {
          loader.dismiss();
=======
            this.navCtrl.setRoot(DashboardPage);
          }
        }, (err) => {
>>>>>>> af17a751b4d17fee04024433aff1dde68409662d
          console.log(err);
        });
      
  
<<<<<<< HEAD
      
=======
      let alert = this._alertCtrl.create({
      title: 'Olá!',
      subTitle: 'Bem vindo, '+this.user.name+'!',
      buttons: ['Bora!']
      });
      alert.present();
>>>>>>> af17a751b4d17fee04024433aff1dde68409662d
    }, (err) => {
      console.log(err);
    });
  }
}
