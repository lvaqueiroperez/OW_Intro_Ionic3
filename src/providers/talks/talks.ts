import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TalksProvider {

  constructor(public http: HttpClient) {

  }

  getAllTalks() {
    return this.http.get('http://data.agenda.wedeploy.io/talks')
      .map(response => response);
  }

}
