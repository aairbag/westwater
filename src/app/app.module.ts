import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from'./app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ThingamabobberComponent } from './products/thingamabobber/thingamabobber.component';
import { ThingamabodyComponent } from './products/thingamabody/thingamabody.component';
import { PageComingSoonComponent } from './page-coming-soon/page-coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThingamabobberComponent,
    ThingamabodyComponent,
    PageComingSoonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
