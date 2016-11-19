import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonEntryComponent} from './pokemon-list/pokemon-entry/pokemon-entry.component';
import {PaginationComponent} from './shared/pagination/pagination.component';
import {PokemonInfoComponent} from './pokemon-info/pokemon-info.component';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonEntryComponent,
    PaginationComponent,
    PokemonInfoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'pokemon/:id', component: PokemonInfoComponent },
      { path: '', component: PokemonListComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
