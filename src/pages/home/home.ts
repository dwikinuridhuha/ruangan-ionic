import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import {Server} from "../../provider/server";
import {DataSource} from "../../provider/datasource";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [Server]
})
export class HomePage {

  items: any;

  constructor(public navCtrl: NavController,
              public db: Server,
              public dataSource: DataSource) {
    this.db.getData().subscribe(data => {
      this.dataSource.source = data.json();
    });
  }

}
