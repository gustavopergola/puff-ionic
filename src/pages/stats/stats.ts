import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  chartFoco(){
      var ctx =document.querySelector('#myChart');
      var chart = new Chart(ctx, {
    type: 'line',
    data:  {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul","Ago","Set","Out","Nov","Dez"],
        datasets: [{
            label: 'Tabela de quantidade de pessoas que focam na aula',
            data: [1.3, 2.1, 2.3, 2.3, 2.4,2.5,2.8,3.0,3.3,3.6,4],
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
  
    chartFoco2(){
      var ctx =document.querySelector('#myChart');
      var chart = new Chart(ctx, {
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
    chartFoco3(){
      var ctx =document.querySelector('#myChart');
      var chart = new Chart(ctx, {
    type: 'line',
    data:  {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul","Ago","Set","Out","Nov","Dez"],
        datasets: [{
            label: 'Tabela de presença do professor',
            data: [2.5,2.8,3.0,3.3,1.3, 2.1, 2.3, 2.3, 2.4,3.6,4, 2.1, 2.3, 2.3,3.8],
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

 
}
