import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FoodToTake } from '../list/list.component';

@Component({
  selector: 'app-food-to-take-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnChanges {

  @Input()
  public food: FoodToTake;

  public avatarStyle: any;

  constructor() { }

  ngOnChanges() {
    this.avatarStyle = {
      'background-image': `url('${this.food.owner.photoURL}')`,
      'background-size': 'cover'
    };
  }



}
