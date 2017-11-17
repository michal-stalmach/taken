import {Component, OnInit, HostBinding} from '@angular/core';
import {SidebarService} from "../../services/sidebar.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @HostBinding("class.open")
  public isSidebarOpen: boolean = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.isOpen$.subscribe(isOpen => this.isSidebarOpen = isOpen);
  }

  ngOnInit() {
  }

}
