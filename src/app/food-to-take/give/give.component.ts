import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-food-to-take-give',
  templateUrl: './give.component.html',
  styleUrls: ['./give.component.css']
})
export class GiveComponent {

  constructor(public dialogRef: MatDialogRef<GiveComponent>) { }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}
