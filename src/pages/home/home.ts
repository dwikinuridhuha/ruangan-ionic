import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import {Server} from "../../provider/server";
import {DataSource} from "../../provider/datasource";

import {Chart} from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [Server]
})
export class HomePage {

    @ViewChild('barCanvas') barCanvas;

    barChart: any;

    satu = 8;
    dua = 3;

  constructor(public navCtrl: NavController,
              public db: Server,
              public dataSource: DataSource) {
    this.db.getData().subscribe(data => {
      this.dataSource.source = data.json();
    });
  }

  memasang() {
      this.barChart = new Chart(this.barCanvas.nativeElement, {
          type: "bar",
          data: {
              labels: ["Red", "Blue"],
              datasets: [{
                  label: '# of Votes',
                  data: [
                      this.dataSource.source[0].masuk,
                      this.dataSource.source[4].masuk
                  ],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              title: {
                  display: true,
                  text: "Hello World",
                  fontSize: 25
              },
              legend: {
                  position: 'right'
              }
          }
      });
    }

    tampil() {
        alert(this.dataSource.source[0].masuk);
        this.satu = this.dataSource.source[0].masuk;
        this.dua = this.dataSource.source[4].masuk;
    }
}
