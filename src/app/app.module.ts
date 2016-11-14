import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {MaterialModule} from '@angular/material';
import { PokemonEntryComponent } from './pokemon-list/pokemon-entry/pokemon-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
