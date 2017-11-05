import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams , ToastController, LoadingController} from 'ionic-angular';
=======
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
>>>>>>> af17a751b4d17fee04024433aff1dde68409662d
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

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _serviceTeacher: TeacherService, private _service: UsuarioService, 
    public toastCtrl: ToastController, private _loadingCtrl: LoadingController) {
=======
  constructor(public navCtrl: NavController, public navParams: NavParams, private _serviceTeacher: TeacherService, 
  private _service: UsuarioService, public toastCtrl: ToastController) {
>>>>>>> af17a751b4d17fee04024433aff1dde68409662d
    this.teacher = this.navParams.get('item_selecionado').id;
    this.user = this._service.getCurrentUser();
    
  }
  
  rate() {
    let aux = "";
    
    for (let n of this.array){
      aux += n;
    }
    
<<<<<<< HEAD
    let loader = this._loadingCtrl.create({
      content: 'Enviando sua avaliação... Marca um 10'
    });
    loader.present();

=======
>>>>>>> af17a751b4d17fee04024433aff1dde68409662d
    this._serviceTeacher.rate(aux, this.user, this.teacher, this.feedback).then((result) => {
      let toast = this.toastCtrl.create({
        message: `Avaliação enviada!`,
        duration: 3000
      });
      console.log("Toast exibido");
      toast.present();
<<<<<<< HEAD
      loader.dismiss();
      this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
      console.log(result);
    }, (err) => {
      loader.dismiss();
=======
      this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
      console.log(result);
    }, (err) => {
>>>>>>> af17a751b4d17fee04024433aff1dde68409662d
      console.log(err);
    });
  }
  
  
  
  
}
