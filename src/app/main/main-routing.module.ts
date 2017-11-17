import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoggedInGuard } from '../authorization/is-logged-in.guard';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from '../food-to-take/list/list.component';
import {PreferencesComponent} from "../preferences/components/preferences/preferences.component";

const routes: Routes = [{
  path: '',
  canActivate: [IsLoggedInGuard],
  component: MainComponent,
  children: [{
    path: '',
    component: ListComponent
  },
    {
      path: 'preferences',
      component: PreferencesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
