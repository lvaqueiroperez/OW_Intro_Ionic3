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

  constructor(public navCtrl: NavController, private talksProvider: TalksProvider, private talksComponent: TalksComponent) {

  }


  onSubmit(title, date) {
    this.talksProvider.save(title, date).subscribe(x => {
      // COMPROBAMOS EL RESULTADO Y VERIFICAMOS
      console.log(x)
      // pasamos al navegador una referencia a la página
      this.navCtrl.push(SuccessPage, {talk: title, date})

    });


  }


}
