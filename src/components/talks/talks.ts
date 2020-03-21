import { Component } from '@angular/core';
import {TalksProvider} from "../../providers/talks/talks";

@Component({
  selector: 'talks',
  template: `
    <ion-list inset>

        <p *ngFor="let talk of talks | async">{{talk.title}}</p>
        <p>2</p>

   </ion-list>`
})
export class TalksComponent {

  text: string;
  talks;

  constructor(private talksProvider: TalksProvider) {
    this.talks = this.talksProvider.getAllTalks();
  }

}
