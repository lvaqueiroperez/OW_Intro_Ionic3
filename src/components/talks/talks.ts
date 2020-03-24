import {Component} from '@angular/core';
import {TalksProvider} from '../../providers/talks/talks';
import {HttpClient} from '@angular/common/http';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'talks',
  //funciona quitando el "async"
  template: `
    <ion-list inset>

      <p *ngFor="let talk of talks">
        <ion-icon name="beer"></ion-icon>
        {{talk.title}}</p>


    </ion-list>`
})

export class TalksComponent {

  text: string;
  talks;

  // QUITADI EL OBJETO "NavController" DEL CONSTRUCTOR
  constructor(public http: HttpClient, private talksProvider: TalksProvider) {
    this.getAllTalks()
  }

  getAllTalks() {
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(result => {
        this.talks = result;
      })

  }


}

