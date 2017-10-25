import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuarioService } from '../../domain/usuario/usuario-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = { name: '', reg: '', password: ''};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _service: UsuarioService, public _alertCtrl: AlertController) {
  }
  
  salvaUsuario(){
    this._service.saveUser(this.user).then((result) => {
      console.log(result);
      this.navCtrl.pop();
      let alert = this._alertCtrl.create({
      title: 'Olá!',
      subTitle: 'Bem vindo, '+this.user.name+'!',
      buttons: ['Bora!']
      });
      alert.present();
    }, (err) => {
      console.log(err);
    });
  }
}
