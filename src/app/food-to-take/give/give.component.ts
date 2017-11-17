import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FoodType } from '../list/list.component';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-food-to-take-give',
  templateUrl: './give.component.html',
  styleUrls: ['./give.component.css']
})
export class GiveComponent {

  public heroForm: FormGroup;
  public type: FoodType = FoodType.FITLAB;

  constructor(public dialogRef: MatDialogRef<GiveComponent>) {
    this.heroForm = new FormGroup({
      lunchingNumber: new FormControl('', [Validators.required]),
      comments: new FormControl('')
    });

    this.heroForm.statusChanges.subscribe(a => console.log(a));
  }

  closeDialog() {
    let lunchingNumber = '';
    if (this.type === FoodType.FITLAB || this.heroForm.valid) {
      if (this.type === FoodType.LUNCHING) {
        lunchingNumber = `CW-${this.heroForm.value.lunchingNumber}`;
      }

      this.dialogRef.close({
        type: this.type,
        lunchingNumber: lunchingNumber,
        details: this.heroForm.value.comments
      });
    }
  }

  onTypeChange(change: MatButtonToggleChange) {
    this.type = change.value;
  }

}
