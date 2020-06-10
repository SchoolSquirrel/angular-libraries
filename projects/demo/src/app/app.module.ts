import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SquirrelChatUiModule } from '../../../squirrel-chat-ui/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SquirrelChatUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
