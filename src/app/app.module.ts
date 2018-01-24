import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GeolocationService } from './geolocation.service';
import { DataService } from './data.service';
import 'hammerjs';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
  MatToolbarModule, MatCardModule, MatSlideToggleModule, MatFormFieldModule, MatSnackBarModule } from "@angular/material";
import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FireBaseService } from './firebase.service';


const routes:Routes=[
  {path:'', component:ListComponent},
  {path:'coffee', component:CoffeeComponent},
  {path:'coffee/:id', component:CoffeeComponent},
  {path:'**', component:ListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule, MatFormFieldModule, MatSnackBarModule,
    FormsModule,
    HttpModule,
    ServiceWorkerModule
  ],
  providers: [GeolocationService,DataService,FireBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
