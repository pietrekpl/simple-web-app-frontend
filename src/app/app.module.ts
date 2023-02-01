import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {ContactComponent} from './contact/contact.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { BoldPipe } from './bold.pipe';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HeaderComponent,
    FooterComponent,
    CreateEmployeeComponent,
    PageNotFoundComponent,
    HomeComponent,
    UpdateEmployeeComponent,
    ContactComponent,
    BoldPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
