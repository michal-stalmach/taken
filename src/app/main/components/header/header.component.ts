import { Component, OnInit } from '@angular/core';
import { SidebarService } from "../../services/sidebar.service";
import { AuthService } from '../../../authorization/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public sidebarOpen: boolean = false;


  constructor(
    private auth: AuthService,
    private router: Router,
    private sidebarService: SidebarService
  ) {
    this.sidebarService.isOpen$.subscribe(isOpen => this.sidebarOpen = isOpen);
  }


  ngOnInit() {
  }

  public toggleSidebar(): void {
    this.sidebarService.toggle();
  }

  logout() {
    this.auth.logout().then(() => this.router.navigate(['login']));
  }

}
