import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ShowteacherPage } from '../showteacher/showteacher';
import { TeacherService } from '../../domain/teacher/teacher-service';

/**
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html',
})
export class TeacherPage implements OnInit {

  searchQuery: string = '';
  public items;
  public lista_modelo;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private _loadingCtrl: LoadingController, private _service: TeacherService,
    private _alertCtrl: AlertController) {

  }

  ngOnInit() {

    let loader = this._loadingCtrl.create({
      content: 'Buscando dados dos professores. Aguarde ...'
    });
    loader.present();

    this._service.getTeachers().then((result) => {

      this.lista_modelo = result;
      this.initializeItems();
      loader.dismiss();
    }, (err) => {
      console.log(err);
      let alert = this._alertCtrl.create({
        title: 'Falha na conexão!',
        buttons: [{ text: 'Estou ciente' }],
        subTitle: 'Não foi possível obter a lista de professores. Tente mais tarde.'
      });
      alert.present();

    });



  }


  initializeItems() {
    this.items = this.lista_modelo;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > - 1);
      })
    }
  }

  showTeacher(item) {
    this.navCtrl.push(ShowteacherPage, { item_selecionado: item });
  }


}
