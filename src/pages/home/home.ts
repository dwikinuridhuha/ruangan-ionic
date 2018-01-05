import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  xAxis: any;
  xValue: any;

  constructor(public navCtrl: NavController) {

  }

  kirim() {
    alert(this.xAxis +" " +this.xValue);
  }

}
