import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendComponent } from './send/send.component';
import { RecieveComponent } from './recieve/recieve.component';
import { SentRequestComponent } from './sent-request/sent-request.component';
import { RecieveRequestComponent } from './recieve-request/recieve-request.component';

@NgModule({
  declarations: [
    AppComponent,
    SendComponent,
    RecieveComponent,
    SentRequestComponent,
    RecieveRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
