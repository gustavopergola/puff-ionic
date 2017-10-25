import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }
  openModal(){
    var div = document.querySelector('.comment-expandir');
    var div2 = document.querySelector('.comment-delimitador');
    var fa = document.querySelector('.fa-angle-down');
    var fa2 = document.querySelector('.fa-angle-up');
    if (fa){
      div.setAttribute("style", "margin-top:0px!important;");  
      fa.setAttribute("class","fa fa-angle-up");
    }else{
      div.setAttribute("style", "margin-top:-180px!important;");  
      fa2.setAttribute("class","fa fa-angle-down");
    }
    
  }
  
}
