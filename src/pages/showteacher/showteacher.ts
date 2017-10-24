import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-showteacher',
  templateUrl: 'showteacher.html',
})
export class ShowteacherPage {

  public item;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('item_selecionado');
  }

}