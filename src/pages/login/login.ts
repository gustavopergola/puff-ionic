import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { DashboardPage }from '../dashboard/dashboard';
import { UsuarioService } from '../../domain/usuario/usuario-service';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  public numero: number;
  
  user = { reg: '', password: ''};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _service: UsuarioService, public _alertCtrl: AlertController) {
    
    this._service.efetuaLogin()
      .then(dado => 
      { 
        this.numero = dado;
      });
  }
  
  login(){
    this._service.login(this.user).then((result) => {
      if (result){
        this._service.setCurrentUser(this.user.reg);
        this.navCtrl.setRoot(DashboardPage);
      }else {
        let alert = this._alertCtrl.create({
          title: 'Combinação incorreta!',
          buttons: ['Ok']
        });
      alert.present();
      }
    }, (err) => {
      console.log(err);
    });
  }
  
}
