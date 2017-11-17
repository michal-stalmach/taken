import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { IsNotLoggedInGuard } from './is-not-logged-in.guard';

@NgModule({
  imports: [
    CommonModule,
    AuthorizationRoutingModule
  ],
  providers: [
    AuthService,
    IsLoggedInGuard,
    IsNotLoggedInGuard
  ],
  declarations: [LoginComponent]
})
export class AuthorizationModule { }
