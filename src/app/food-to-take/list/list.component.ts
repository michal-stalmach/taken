import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../authorization/auth.service';
import * as firebase from 'firebase/app';
import { GiveComponent } from "../give/give.component";
import { MatDialog } from "@angular/material/dialog";

export interface Item {
  owner: string;
  createdAt: Date;
  type: FoodType;
  isTaken: boolean;
  takenBy?: string;
}

enum FoodType {
  FITLAB = 'FITLAB'
}

@Component({
  selector: 'app-food-to-take-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public items: Observable<Item[]>;
  private itemsCollection: AngularFirestoreCollection<Item>;

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private dialog: MatDialog
  ) {
    this.itemsCollection = afs.collection<Item>('toTake');
    this.items = this.itemsCollection.valueChanges();
  }

  addItem() {
    let dialogRef = this.dialog.open(GiveComponent, {
      height: '400px',
      width: '600px',
    });

    // this.auth.user$
    //   .map<firebase.User, Item>(user => ({
    //     owner: user.uid,
    //     createdAt: new Date(),
    //     type: FoodType.FITLAB,
    //     isTaken: false
    //   }))
    //   .subscribe(item => this.itemsCollection.add(item));
  }

}
