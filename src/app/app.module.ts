import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule, AngularFirestore, EnablePersistenceToken } from 'angularfire2/firestore';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { RouterModule } from '@angular/router';
import { FoodToTakeModule } from './food-to-take/food-to-take.module';
import {PreferencesModule} from "./preferences/preferences.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthorizationModule,
    FoodToTakeModule,
    PreferencesModule,
    MainModule,
    AppRoutingModule,
    RouterModule.forRoot([], {
      enableTracing: true
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [
    { provide: EnablePersistenceToken, useValue: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
