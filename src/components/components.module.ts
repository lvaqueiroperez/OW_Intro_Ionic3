import { NgModule } from '@angular/core';
import { TalksComponent } from './talks/talks';
import {IonicPageModule} from "ionic-angular";
@NgModule({
	declarations: [TalksComponent],
	imports: [IonicPageModule.forChild(TalksComponent)],
	exports: [TalksComponent]
})
export class ComponentsModule {}

