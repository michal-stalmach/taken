import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../authorization/auth.service';
import * as firebase from 'firebase/app';

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
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public items: Observable<Item[]>;
  private itemsCollection: AngularFirestoreCollection<Item>;

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
  ) {
    this.itemsCollection = afs.collection<Item>('toTake');
    this.items = this.itemsCollection.valueChanges();
  }

  addItem() {
    this.auth.user$
      .map<firebase.User, Item>(user => ({
        owner: user.uid,
        createdAt: new Date(),
        type: FoodType.FITLAB,
        isTaken: false
      }))
      .subscribe(item => this.itemsCollection.add(item));
  }

}
