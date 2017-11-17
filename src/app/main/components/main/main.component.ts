import {Component, OnInit, HostBinding} from '@angular/core';
import {SidebarService} from "../../services/sidebar.service";
import {JanuszService} from "../../../services/janusz.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @HostBinding("class.open")
  public isSidebarOpen: boolean = false;

  constructor(private sidebarService: SidebarService, public januszService: JanuszService) {
    this.sidebarService.isOpen$.subscribe(isOpen => this.isSidebarOpen = isOpen);
  }

  ngOnInit() {
  }

}
