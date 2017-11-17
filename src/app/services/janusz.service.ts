import { Injectable } from '@angular/core';

@Injectable()
export class JanuszService {

  public enabled: boolean = false;

  public go(): void {
    this.enabled = true;
    setTimeout(() => {
      this.enabled = false
    }, 2500)
  }

}
