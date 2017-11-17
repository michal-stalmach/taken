import {Component, OnInit, HostBinding} from '@angular/core';
import {SidebarService} from "../../services/sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @HostBinding("class.open")
  public isSidebarOpen: boolean = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.isOpen$.subscribe(isOpen => this.isSidebarOpen = isOpen);
  }

  ngOnInit() {
  }

}
