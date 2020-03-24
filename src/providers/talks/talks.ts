import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TalksProvider {

  constructor(public http: HttpClient) {

  }

  // NO VA AQUÍ???
  /*
  getAllTalks() {
    return this.http.get('http://data.agenda.wedeploy.io/talks')
      .map(response => response);
  }
*/

  // PARECE QUE SI LE CAMBIAMOS EL ENLACE POR EL QUE USAMOS EN EL "GETALLTALKS" FUNCIONA
  save(title, date) {

    return this.http.post('http://jsonplaceholder.typicode.com/posts', {title, date});

  }

}
