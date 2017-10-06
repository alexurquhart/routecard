import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArcgisModule } from './modules/arcgis/arcgis.module';
import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArcgisModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
