import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MusicaComponent } from './musica/musica.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MusicaComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
