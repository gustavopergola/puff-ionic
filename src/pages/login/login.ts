import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DashboardPage }from '../dashboard/dashboard';
// import { UsuarioService } from '../../domain/usuario/usuario-service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: string = '';
  public senha: string = '';
  
  constructor(public navCtrl: NavController, private _alertCtrl: AlertController, public navParams: NavParams) {
  }
  
  
  login(event){
    
    // this._service
    //   .efetuaLogin(this.email, this.senha)
    //   .then(() => {
    //     this.navCtrl.setRoot(DashboardPage)
    //   })
    //   .catch(() => {
        this._alertCtrl.create({
          title: 'Problema no login',
          subTitle: 'Email ou senha inválidos. Verifique',
          buttons: [{ text: 'Ok'}]
        }).present();
      // });
  }
  
}
