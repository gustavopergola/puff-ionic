import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../domain/usuario/usuario-service';
import { TeacherService } from '../../domain/teacher/teacher-service';

/**
 * Generated class for the RatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class RatingPage {
  public array: number[] = [1, 1, 1];
  private user: number;
  private teacher: number;
  
  // cansativa -> 0
  // acesso -> 1
  // material -> 2

  constructor(public navCtrl: NavController, public navParams: NavParams, private _serviceTeacher: TeacherService, private _service: UsuarioService) {
    this.teacher = this.navParams.get('item_selecionado').id;
    this.user = this._service.getCurrentUser();
  }
  
  rate() {
    let aux = "";
    
    for (let n of this.array){
      aux += n;
    }
    
    this._serviceTeacher.rate(aux, this.user, this.teacher).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
  
  
}
