import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController, LoadingController} from 'ionic-angular';
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
  public feedback: string = "";
  
  // cansativa -> 0
  // acesso -> 1
  // material -> 2

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _serviceTeacher: TeacherService, private _service: UsuarioService, 
    public toastCtrl: ToastController, private _loadingCtrl: LoadingController) {
    this.teacher = this.navParams.get('item_selecionado').id;
    this.user = this._service.getCurrentUser();
    
  }
  
  rate() {
    let aux = "";
    
    for (let n of this.array){
      aux += n;
    }
    
    let loader = this._loadingCtrl.create({
      content: 'Enviando sua avaliação... Marca um 10'
    });
    loader.present();

    this._serviceTeacher.rate(aux, this.user, this.teacher, this.feedback).then((result) => {
      let toast = this.toastCtrl.create({
        message: `Avaliação enviada!`,
        duration: 3000
      });
      console.log("Toast exibido");
      toast.present();
      loader.dismiss();
      this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
      console.log(result);
    }, (err) => {
      loader.dismiss();
      console.log(err);
    });
  }
  
  
  
  
}
