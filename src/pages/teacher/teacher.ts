import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ShowteacherPage } from '../showteacher/showteacher';
import { Http } from '@angular/http';

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
export class TeacherPage implements OnInit{

  searchQuery: string = '';
  public items;


  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: Http, private _alertCtrl: AlertController) {
     this.initializeItems();
  }
  
  
  initializeItems() {
    this.items = [
    {name:'Isabel Rosseti', subject: 'Estrutura de Dados'},
    {name:'Dante Corbucci', subject: 'Programação de Computadores'},
    {name:'Lucia Drummond', subject: 'Sistemas Operacionais'}
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  showTeacher(item){
    this.navCtrl.push(ShowteacherPage, {item_selecionado: item});
  }
  
  
}
