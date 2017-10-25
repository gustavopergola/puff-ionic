import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../domain/usuario/usuario-service';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  public user = { password: '', password_new: '', password_new_confirmation: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private _service: UsuarioService) {
    
  }
  
  
  checkAndUpdatePassword(){
    this._service.changePassword(this.user).then((result) => {
        this.navCtrl.popToRoot();
    }, (err) => {
      console.log(err);
    });
  }
  
}
