import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DashboardPage }from '../dashboard/dashboard';
import { UsuarioService } from '../../domain/usuario/usuario-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  public numero: number;
  
  user = { reg: '', password: ''};
  
  constructor(public navCtrl: NavController, private _alertCtrl: AlertController, public navParams: NavParams, private _http: Http, private _service: UsuarioService) {
    
    this._service.efetuaLogin()
      .then(dado => 
      { 
        this.numero = dado;
        //alert(this.numero);     //isso executa antes do que o próximo alert
      });
    
    //alert("this = " + this.numero);  
  }
  
  login(){
    this._service.login(this.user).then((result) => {
      console.log(result);
      if (result){
        this._service.setCurrentUser(this.user.reg);
        this.navCtrl.setRoot(DashboardPage);
      }
      
      alert(this._service.getCurrentUser());
    }, (err) => {
      console.log(err);
    });
  }
  
}
