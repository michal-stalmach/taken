import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FoodToTake, User } from '../list/list.component';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../../authorization/auth.service';

@Component({
  selector: 'app-food-to-take-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnChanges {

  @Input()
  public food: FoodToTake;

  public avatarStyle: any;

  private itemsCollection: AngularFirestoreCollection<FoodToTake>;

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<FoodToTake>('toTake');
  }

  ngOnChanges() {
    this.avatarStyle = {
      'background-image': `url('${this.food.owner.photoURL}')`,
      'background-size': 'cover'
    };
  }

  take() {
    this.auth.user$
      .map(user => ({
        isTaken: true,
        takenBy: {
          uid: user.uid,
          name: user.displayName,
          photoURL: user.photoURL
        } as User
      }))
      .subscribe(updates => this.itemsCollection.doc(this.food.uuid).update(updates));
  }

}
