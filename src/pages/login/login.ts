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

  public email: string = '';
  public senha: string = '';
  
  public numero: number;
  
  constructor(public navCtrl: NavController, private _alertCtrl: AlertController, public navParams: NavParams, private _http: Http, private _service: UsuarioService) {
    
    this._service.efetuaLogin()
      .then(dado => 
      { 
        this.numero = dado;
        alert(this.numero);        //isso executa antes do que o próximo alert
      });
    
    //alert("this = " + this.numero);  
  }
  
}
