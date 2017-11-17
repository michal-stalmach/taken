import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodToTakeRoutingModule } from './food-to-take-routing.module';
import { ListComponent } from './list/list.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ItemComponent } from './item/item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GiveComponent } from './give/give.component';

@NgModule({
  imports: [
    CommonModule,
    FoodToTakeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  entryComponents: [
    GiveComponent
  ],
  // providers: [AngularFirestore],
  declarations: [ListComponent, ItemComponent, GiveComponent]
})
export class FoodToTakeModule { }
