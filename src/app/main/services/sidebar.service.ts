import { Injectable } from '@angular/core';
import {BehaviorSubject } from "rxjs";

@Injectable()
export class SidebarService {

  public isOpen: boolean = false;
  public isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public toggle(): void {
    this.isOpen = !this.isOpen;
    this.isOpen$.next(this.isOpen);
  }

  public open(): void {
    this.isOpen = true;
    this.isOpen$.next(this.isOpen);
  }

  public close(): void {
    this.isOpen = false;
    this.isOpen$.next(this.isOpen);
  }

}
