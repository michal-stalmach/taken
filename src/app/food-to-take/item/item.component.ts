import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FoodToTake, User } from '../list/list.component';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../../authorization/auth.service';
import {JanuszService} from "../../services/janusz.service";

@Component({
  selector: 'app-food-to-take-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnChanges {

  @Input()
  public food: FoodToTake;

  public ownerAvatarStyle: any;
  public takenByAvatarStyle: any;

  private itemsCollection: AngularFirestoreCollection<FoodToTake>;

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    public januszService: JanuszService
  ) {
    this.itemsCollection = afs.collection<FoodToTake>('toTake');
  }

  ngOnChanges() {
    this.ownerAvatarStyle = {
      'background-image': `url('${this.food.owner.photoURL}')`,
      'background-size': 'cover'
    };
    if (this.food.isTaken) {
      this.takenByAvatarStyle = {
        'background-image': `url('${this.food.takenBy.photoURL}')`,
        'background-size': 'cover'
      };
    }
  }

  take() {
    this.auth.user$
      .map(user => ({
        isTaken: true,
        takenAt: new Date(),
        takenBy: {
          uid: user.uid,
          name: user.displayName,
          photoURL: user.photoURL
        } as User
      }))
      .subscribe(updates => {
        this.itemsCollection.doc(this.food.uuid).update(updates);
        this.januszService.go();
      });
  }
}
