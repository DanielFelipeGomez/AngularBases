import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { ManageUsersModule } from './manage-users/manage-users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ManageUsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
