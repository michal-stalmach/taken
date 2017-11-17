import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoggedInGuard } from '../authorization/is-logged-in.guard';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [{
  path: '',
  canActivate: [IsLoggedInGuard],
  component: MainComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
