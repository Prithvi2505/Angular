import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first.component';
import { CardComponent } from './card/card.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TwoWayDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstComponent,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
