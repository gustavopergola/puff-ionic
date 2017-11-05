import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeacherService } from '../../domain/teacher/teacher-service';
import { UsuarioService } from '../../domain/usuario/usuario-service';
import { AfterViewChecked } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})


export class CommentsPage {
  
  public aux: any;
  public numero: number = 1;

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

  
  openModal(id){
    var div = document.querySelector('.comment-expandir-' + id);
    var div2 = document.querySelector('#comment-delimitador-' + id);
    var fa = document.querySelector('.fa-angle-down-' + id);
    var fa2 = document.querySelector('.fa-angle-up-' + id);

    if (fa){
      div.setAttribute("style", "margin-top:0px!important;");  
      fa.setAttribute("class","fa fa-angle-up fa-angle-up-" + id);
    }else{
      div.setAttribute("style", "margin-top:-180px!important;");  
      fa2.setAttribute("class","fa fa-angle-down fa-angle-down-" + id);
    }
  }

  ngAfterViewChecked (){
    var counters = document.getElementsByClassName("counter");
    console.log(counters);
    for (var index = 0; index < counters.length; index++) {
      counters[index].innerHTML = (index + 1).toString(); 
    }
  }

}
