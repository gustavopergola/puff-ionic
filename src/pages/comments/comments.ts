import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeacherService } from '../../domain/teacher/teacher-service';
import { UsuarioService } from '../../domain/usuario/usuario-service';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})


export class CommentsPage {
  
  public aux: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _service: UsuarioService, private _serviceTeacher: TeacherService) {
    this.getFeedback();
  }

  getFeedback(){
    this._service.getTeacherId().then((result) => {
      //alert(result); //ok
      this._serviceTeacher.feedback(result).then((result) => {
        this.aux = result;
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
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
