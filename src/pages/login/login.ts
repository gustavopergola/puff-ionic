import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _service: UsuarioService, public _alertCtrl: AlertController, 
    private _loadingCtrl: LoadingController) {

    }
  
  login(){
    let loader = this._loadingCtrl.create({
      content: 'Checando suas informações com o servidor. Aguarde ...'
    });
    loader.present();

    this._service.login(this.user).then((result) => {
      loader.dismiss();
      this.navCtrl.setRoot(DashboardPage);
    }, (err) => {
      loader.dismiss();
      if (err.status == 401){
        let alert = this._alertCtrl.create({
          title: 'Combinação inválida.',
          buttons: ['Ok']
        });
        alert.present();  
      }else {
        let alert = this._alertCtrl.create({
          title: 'Servidor indisponível.',
          buttons: ['Ok']
        });
        alert.present();  
      }
    });
  }
  
}
