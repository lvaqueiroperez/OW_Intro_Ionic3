import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {NativeStorage} from '@ionic-native/native-storage/ngx';

const key = 'firsVisited';
declare let cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [InAppBrowser, NativeStorage]
})
export class HomePage implements OnInit {

  ngOnInit(): void {

    this.storage.get(key)
      .then(x => console.log('first time', x))


  }

  persistValue() {

    this.storage.get(key)
      .then(x =>
        this.storage.set(key, !x)
      );

  }

  showValue() {

    this.storage.get(key).then(x => console.log('read', x))

  }

  constructor(public navCtrl: NavController, private storage: Storage, private browser: InAppBrowser,
              private nativeStorage: NativeStorage) {

  }

  /*
    click() {
      let browser = this.browser.create('http://www.google.com');
      browser.show();

    }
  */

  /*
    click() {
      this.nativeStorage.getItem(key).then(x => {
        console.log(x);
        this.nativeStorage.setItem(key, true).then(x => console.log(x))
      })

    }
  */
  click() {

    cordova.plugins.snackbar('Ejemplo de texto', 'INDEFINITE', 'Accion', () => console.log('accion'));

  }

}
