import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IsNotLoggedInGuard } from './is-not-logged-in.guard';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  canActivate: [IsNotLoggedInGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
