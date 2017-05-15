import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ThingamabobberComponent } from './products/thingamabobber/thingamabobber.component';
import { ThingamabodyComponent } from './products/thingamabody/thingamabody.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'thingamabobber', component: ThingamabobberComponent },
  { path: 'thingamabody', component: ThingamabodyComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
