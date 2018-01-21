import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { UsuarioService } from '../../domain/usuario/usuario-service';
import {DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = { name: '', reg: '', password: ''};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _service: UsuarioService, public _alertCtrl: AlertController, 
    private _loadingCtrl: LoadingController) {
  }
  
  salvaUsuario(){
    
    let loader = this._loadingCtrl.create({
      content: "Te cadastrando no nosso banco de dados. Relaxa ai"
    });
    loader.present();

    this._service.saveUser(this.user).then((result) => {
      console.log(result);
        this._service.login(this.user).then((result) => {
          if (result){
            // LOGIN AUTOMATICALLY
            this._service.login({reg: this.user.reg, password: this.user.password});

            loader.dismiss();
            let alert = this._alertCtrl.create({
              title: 'Olá!',
              subTitle: 'Bem vindo, '+this.user.name+'!',
              buttons: ['Bora!']
              });
              alert.present();
            this.navCtrl.setRoot(DashboardPage);
          }
          else{
            loader.dismiss();
            let falha = this._alertCtrl.create({
              title: 'Falha no cadastro',
              subTitle: 'Informações inválidas',
              buttons: ['Entendido!']
            });
            falha.present();
            
          }
        }, (err) => {
          loader.dismiss();
          console.log(err);
        });
      
  
      
    }, (err) => {
      console.log(err);
    });
  }
}
