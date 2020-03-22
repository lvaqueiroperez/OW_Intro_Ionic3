import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TalksProvider} from '../../providers/talks/talks';
import {TalksComponent} from '../../components/talks/talks';
import {SuccessPage} from "../success/success";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public talks1: TalksProvider, public talks2: TalksComponent) {

  }

  onSubmit(title, date) {
    this.talks1.save(title, date)
      .subscribe(x => {

        console.log(x)
        this.navCtrl.push(SuccessPage, {talk: {title, date}})
      });
  }

}
