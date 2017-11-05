import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
=======
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
>>>>>>> af17a751b4d17fee04024433aff1dde68409662d
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
  
<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _service: UsuarioService, public _alertCtrl: AlertController, 
    private _loadingCtrl: LoadingController) {
=======
  constructor(public navCtrl: NavController, public navParams: NavParams, private _service: UsuarioService, public _alertCtrl: AlertController) {
>>>>>>> af17a751b4d17fee04024433aff1dde68409662d
    
    this._service.efetuaLogin()
      .then(dado => 
      { 
        this.numero = dado;
      });
  }
  
  login(){
<<<<<<< HEAD
    let loader = this._loadingCtrl.create({
      content: 'Checando suas informações com o servidor. Aguarde ...'
    });
    loader.present();

    this._service.login(this.user).then((result) => {
      if (result){
        this._service.setCurrentUser(this.user.reg);
        loader.dismiss();
        this.navCtrl.setRoot(DashboardPage);
      }else {
        loader.dismiss();
=======
    this._service.login(this.user).then((result) => {
      if (result){
        this._service.setCurrentUser(this.user.reg);
        this.navCtrl.setRoot(DashboardPage);
      }else {
>>>>>>> af17a751b4d17fee04024433aff1dde68409662d
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
