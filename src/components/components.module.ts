import {NgModule} from '@angular/core';
import {TalksComponent} from './talks/talks';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
  // QUITAMOS ESTE IMPORT imports: [IonicPageModule.forChild(TalksComponent)],
  //Y LA DECLARACION DE "TalksComponent"
  declarations: [],
  imports: [],
  // Y EL EXPORT exports: [TalksComponent]
  exports: []
})
export class ComponentsModule {
}

