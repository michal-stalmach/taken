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

  public userName: string = ""
  public userPhotoLink: string = "";


  constructor(
    private auth: AuthService,
    private router: Router,
    private sidebarService: SidebarService,
    public userService: AuthService
  ) {
    this.sidebarService.isOpen$.subscribe(isOpen => this.sidebarOpen = isOpen);
    this.userService.user$.subscribe(userData => {
      this.userName = userData.displayName.split(" ")[0];
      this.userPhotoLink = userData.photoURL;
    });
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
