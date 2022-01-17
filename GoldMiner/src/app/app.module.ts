import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StructListComponent } from './struct-list/struct-list.component';
import { StructCardComponent } from './struct-card/struct-card.component';
import { MineComponent } from './mine/mine.component';
import { GameHubComponent } from './game-hub/game-hub.component';

@NgModule({
  declarations: [
    AppComponent,
    StructListComponent,
    StructCardComponent,
    MineComponent,
    GameHubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
