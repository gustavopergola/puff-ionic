import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../domain/usuario/usuario-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = { name: '', reg: '', password: ''};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _service: UsuarioService) {
  }

  salvaUsuario(){
    alert("entrou em salva usuario");
    this._service.saveUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
}
