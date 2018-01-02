import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { DataSource } from './datasource';
import 'rxjs/add/operator/map';

@Injectable()
export class Server {
    constructor(public http: Http,public datasource: DataSource) {}

    getData(){

        return this.http.get('http://localhost:8000/api/data')
            .map(res => res);

    }
}