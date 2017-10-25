import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { UsuarioService } from '../../domain/usuario/usuario-service';
import { TeacherService } from '../../domain/teacher/teacher-service';

@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class RatingPage {
  public array: number[] = [1, 1, 1];
  private user: string;
  private teacher: number;
  
  // cansativa -> 0
  // acesso -> 1
  // material -> 2

  constructor(public navCtrl: NavController, public navParams: NavParams, private _serviceTeacher: TeacherService, 
  private _service: UsuarioService, public toastCtrl: ToastController) {
    this.teacher = this.navParams.get('item_selecionado').id;
    this.user = this._service.getCurrentUser();
    
  }
  
  rate() {
    let aux = "";
    
    for (let n of this.array){
      aux += n;
    }
    
    this._serviceTeacher.rate(aux, this.user, this.teacher).then((result) => {
      let toast = this.toastCtrl.create({
        message: `Avaliação enviada!`,
        duration: 3000
      });
      console.log("Toast exibido");
      toast.present();
      this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
  
  
  
  
}
