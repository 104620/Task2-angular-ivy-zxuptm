import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonComponent } from './person.component';
import { ChatService } from '../chat.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, PersonComponent],
  providers: [ChatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
