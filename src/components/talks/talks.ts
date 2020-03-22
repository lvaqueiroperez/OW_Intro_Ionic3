import {Component} from '@angular/core';
import {TalksProvider} from '../../providers/talks/talks';
import {HttpClient} from '@angular/common/http';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'talks',
  //funciona quitando el "async"
  template: `
    <ion-list inset>

      <p *ngFor="let talk of talks">{{talk.title}}</p>
      <p>2</p>

    </ion-list>`
})
export class TalksComponent {

  text: string;
  talks;

  constructor(public http: HttpClient, public navCtrl: NavController, private talksProvider: TalksProvider) {
    this.getAllTalks()
  }

  getAllTalks() {
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(result => {
        this.talks = result;
      })

  }


  onSubmit(title, date) {
    this.talksProvider.save(title, date).subscribe(x => console.log(x));
  }


}

