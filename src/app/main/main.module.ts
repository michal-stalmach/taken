import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { MatSidenavModule } from "@angular/material";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MainRoutingModule
  ],
  declarations: [MainComponent, SidebarComponent, HeaderComponent],
  exports: [MainComponent, SidebarComponent, HeaderComponent]
})
export class MainModule { }
