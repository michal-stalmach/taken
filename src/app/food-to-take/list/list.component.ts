import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../authorization/auth.service';
import * as firebase from 'firebase/app';
import { GiveComponent } from '../give/give.component';
import { MatDialog } from '@angular/material/dialog';
import 'rxjs/add/operator/combineLatest';

export interface FoodToTake {
  owner: {
    uid: string,
    name: string,
    photoURL: string
  };
  createdAt: Date;
  type: FoodType;
  isTaken: boolean;
  takenBy?: string;
}

export enum FoodType {
  FITLAB = 'FITLAB'
}

@Component({
  selector: 'app-food-to-take-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public items: Observable<FoodToTake[]>;
  private itemsCollection: AngularFirestoreCollection<FoodToTake>;

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private dialog: MatDialog
  ) {
    this.itemsCollection = afs.collection<FoodToTake>('toTake');
    this.items = this.itemsCollection
      .valueChanges()
      .do(a => console.log(a));
    // .map(items => items.sort());
  }

  addItem() {
    this.dialog.open(GiveComponent, {
      height: '400px',
      width: '600px',
    })
      .afterClosed()
      .combineLatest(this.auth.user$)
      .map(([food, user]: [any, firebase.User]) => ({
        ...food,
        owner: {
          uid: user.uid,
          name: user.displayName,
          photoURL: user.photoURL
        },
        createdAt: new Date(),
        isTaken: false
      }))
      .subscribe(item => this.itemsCollection.add(item));
  }

}
