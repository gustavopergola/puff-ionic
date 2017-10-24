import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
export class TeacherPage {

  searchQuery: string = '';
  items: string[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
      // this.profs = [
      //   {nome:'Isabel Rosseti', disc: 'Estrutura de Dados'},
      //   {nome:'Dante Corbucci', disc: 'Programação de Computadores'},
      //   {nome:'Lucia Drummond', disc: 'Sistemas Operacionais'}
      //   ];
      
      this.initializeItems();
  }
  
  
  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Rio de Janeiro'
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
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  
}
