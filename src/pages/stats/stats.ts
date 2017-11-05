import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {Chart} from 'chart.js';
import { TeacherService } from '../../domain/teacher/teacher-service';
import { UsuarioService } from '../../domain/usuario/usuario-service';

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

    private firstChart: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public teacherService: TeacherService,
                public _loadingCtrl: LoadingController, public _alertCtrl: AlertController, public _userService: UsuarioService) {
        this.getFirstChart();
    }

    chartFoco(){
        var ctx = document.querySelector('#myChart');
        new Chart(ctx, {
            type: 'line',
            data:  {
                labels: this.firstChart[0],
                datasets: [{
                    label: 'Média das notas x Tempo(meses)',
                    data: this.firstChart[1],
                    borderWidth: 1
                }]
            },
            options: {
                elements: {
                    line: {
                        tension: 0.1,
                    }
                }
            }
        });
    }
  
    chartMaterial(){
        var ctx =document.querySelector('#myChart');
        new Chart(ctx, {
            type: 'line',
            data:  {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul","Ago","Set","Out","Nov","Dez"],
                datasets: [{
                    label: 'Tabela de qualidade do material',
                    data: [2.5,2.8,3.0,3.3,1.3, 2.1, 2.3, 2.3, 2.4,3.6,4,4.7],
                    borderWidth: 1
                }]
            },
            options: {
                elements: {
                    line: {
                        tension: 0.1,
                    }
                }
            }
        });

    }

    chartPresenca(){
        var ctx =document.querySelector('#myChart');
        new Chart(ctx, {
            type: 'line',
            data:  {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul","Ago","Set","Out","Nov","Dez"],
                datasets: [{
                    label: 'Tabela de presença do professor',
                    data: [2.5, 2.8, 3.0, 3.3, 1.3, 2.1, 2.3, 2.3, 2.4, 3.6, 4, 2.1, 2.3, 2.3, 3.8],
                    borderWidth: 1
                }]
            },
            options: {
                elements: {
                    line: {
                        tension: 0.1,
                    }
                }
            }
        });
    }

    getFirstChart(){

        let loader = this._loadingCtrl.create({
            content: 'Buscando estatísticas. Aguarde ...'
        });

        loader.present();

        this._userService.getTeacherId().then((result) => {
            this.teacherService.stats(1, result).then((result) => {
                this.firstChart = result;
                loader.dismiss();
                console.log(this.firstChart);
            }, (err) => {
                loader.dismiss();
                console.log(err);
                let alert = this._alertCtrl.create({
                title: 'Falha na conexão!',
                buttons: [{ text: 'Estou ciente' }],
                subTitle: 'Não foi possível obter as estatísticas do professor. Tente mais tarde.'
                });
                alert.present();
            });    
        }, (err) => {
            loader.dismiss();
            console.log(err);
            let alert = this._alertCtrl.create({
            title: 'Falha na conexão!',
            buttons: [{ text: 'Estou ciente' }],
            subTitle: 'Não foi possível obter as estatísticas do professor. Tente mais tarde.'
            });
            alert.present();
        });        

                
    }
}
