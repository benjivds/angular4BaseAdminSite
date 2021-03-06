import { SiteModule } from './site/site.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
