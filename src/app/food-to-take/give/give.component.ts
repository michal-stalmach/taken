import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FoodType } from '../list/list.component';

@Component({
  selector: 'app-food-to-take-give',
  templateUrl: './give.component.html',
  styleUrls: ['./give.component.css']
})
export class GiveComponent {

  public type: { value: FoodType } = {
    value: FoodType.FITLAB
  };

  constructor(public dialogRef: MatDialogRef<GiveComponent>) { }

  closeDialog() {
    this.dialogRef.close({
      type: this.type.value
    });
  }

}
