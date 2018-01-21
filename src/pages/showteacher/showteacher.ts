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
  public aux: number[] = [0,0,0]
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _service: UsuarioService, private _serviceTeacher: TeacherService) {
    this.item = this.navParams.get('item_selecionado');
    this._serviceTeacher.current_teacher = this.item.id;
    this.setTaxes();
  }
  
  avaliar(){
    this.navCtrl.push(RatingPage, {item_selecionado: this.item});
  }
  
  setTaxes(){
    this._serviceTeacher.rating(this.item.id).then((result) => {
      this.aux[0] = result[0] ? result[0] : 0.001;
      this.aux[1] = result[1] ? result[1] : 0.001;
      this.aux[2] = result[2] ? result[2] : 0.001;
    }, (err) => {
      console.log(err);
    });
  }
  
  loggedIN(){
    return (this._service.getCurrentUser() != "randomString");
  }
}
