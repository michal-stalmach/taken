import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodToTakeRoutingModule } from './food-to-take-routing.module';
import { ListComponent } from './list/list.component';
import { AngularFirestore } from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    FoodToTakeRoutingModule
  ],
  // providers: [AngularFirestore],
  declarations: [ListComponent]
})
export class FoodToTakeModule { }
