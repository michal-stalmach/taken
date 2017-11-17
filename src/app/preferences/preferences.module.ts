import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { MatRadioModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatRadioModule
  ],
  declarations: [PreferencesComponent]
})
export class PreferencesModule { }
