import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from "rxjs";

@Injectable()
export class SidebarService {

  public isOpen: boolean = false;
  public isOpen$: BehaviorSubject<boolean> = new Subject<boolean>(false);

  constructor() { }

  public toggle(): void {
    this.isOpen = !this.isOpen;
    this.isOpen$.next(this.isOpen);
  }
}
