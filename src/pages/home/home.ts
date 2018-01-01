import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from "angularfire2/database";
import { FirebaseListObservable} from "angularfire2/database-deprecated";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    dataFirebase: any;
    dataDariPython;
    test;

    http = http.get("http://localhost:8000/");

  constructor(public navCtrl: NavController,
              public db: AngularFireDatabase) {
        // this.dataFirebase = this.db.list('/user').valueChanges().subscribe(data => {
        //     this.dataDariPython = data;
        //     // console.log(data)
        // });
      this.test = [1, 7];
  }

  public tampil() {
      alert(this.test[1]);
  }
}
