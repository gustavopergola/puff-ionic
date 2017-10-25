import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RatingPage } from '../rating/rating';
import { UsuarioService } from '../../domain/usuario/usuario-service';
import { TeacherService } from '../../domain/teacher/teacher-service';

@IonicPage()
@Component({
  selector: 'page-showteacher',
  templateUrl: 'showteacher.html',
})
export class ShowteacherPage {

  public item;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _service: UsuarioService, private _serviceTeacher: TeacherService) {
    this.item = this.navParams.get('item_selecionado');
    this._serviceTeacher.current_teacher = this.item.id;
  }
  
  avaliar(){
    this.navCtrl.push(RatingPage, {item_selecionado: this.item});
  }
  
  loggedIN(){
    return (this._service.getCurrentUser() != "randomString");
  }
}
