import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../authorization/auth.service';
import * as firebase from 'firebase/app';
import { GiveComponent } from '../give/give.component';
import { MatDialog } from '@angular/material/dialog';
import 'rxjs/add/operator/combineLatest';

export interface FoodToTake {
  uuid: string;
  owner: User;
  createdAt: Date;
  type: FoodType;
  isTaken: boolean;
  takenAt?: Date;
  takenBy?: User;
  details: string;
}

export interface User {
  uid: string;
  name: string;
  photoURL: string;
}

export enum FoodType {
  FITLAB = 'FITLAB',
  LUNCHING = 'LUNCHING'
}

@Component({
  selector: 'app-food-to-take-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public items: Observable<FoodToTake[]>;
  public onlyAvaliableFoodShown = false;
  private itemsCollection: AngularFirestoreCollection<FoodToTake>;

  constructor(
    public afs: AngularFirestore,
    public auth: AuthService,
    public dialog: MatDialog
  ) {
    // .do(a => console.log(a));
    // .map(items => items.sort());
    this.itemsCollection = afs.collection<FoodToTake>(
      'toTake',
      ref => ref.orderBy('createdAt', 'desc').limit(50)
    );
    this.items = this.itemsCollection.valueChanges();
  }

  addItem() {
    this.dialog.open(GiveComponent, {
      height: '400px',
      width: '600px',
    })
      .afterClosed()
      .filter(food => food.type != null)
      .combineLatest(this.auth.user$)
      .map(([food, user]: [any, firebase.User]) => ({
        ...food,
        owner: {
          uid: user.uid,
          name: user.displayName,
          photoURL: user.photoURL
        },
        createdAt: new Date(),
        isTaken: false,
        uuid: uuid()
      }))
      .subscribe(item => this.itemsCollection.doc(item.uuid).set(item));
  }

  public changeModel(event): void {
    this.onlyAvaliableFoodShown = event.checked;
  }

}


function uuid(): string {
  return [s4(), s4(), '-', s4(), '-', s4(), '-', s4(), '-', s4(), s4(), s4()].join('');
}

function s4(): string {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}
