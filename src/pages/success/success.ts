import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-success',
  templateUrl: 'success.html',
})
// DA ERROR PORQUE TAMBIÉN SE IMNPORTRA EN SUCCESS.MODULE???
// SuccessPage is declared in multiple Angular modules: AppModule and SuccessPageModule, pero va igual solo que tarda?????
export class SuccessPage implements OnInit {

  info: any;

  ngOnInit(): void {

    this.info = this.navParams.get('talk')

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessPage');
  }

}
