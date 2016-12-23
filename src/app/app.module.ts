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
import { PokemonAbilityInfoComponent } from './pokemon-info/pokemon-ability-info/pokemon-ability-info.component';
import { FeetPipe } from './shared/metrics/feet.pipe';
import { PoundPipe } from './shared/metrics/pound.pipe';
import { PokemonDescriptionComponent } from './pokemon-info/pokemon-description/pokemon-description.component';
import { PokemonTypesComponent } from './pokemon-info/pokemon-types/pokemon-types.component';
import { PokemonStatsComponent } from './pokemon-info/pokemon-stats/pokemon-stats.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonEntryComponent,
    PaginationComponent,
    PokemonInfoComponent,
    NavbarComponent,
    PokemonAbilityInfoComponent,
    FeetPipe,
    PoundPipe,
    PokemonDescriptionComponent,
    PokemonTypesComponent,
    PokemonStatsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'pokemon/:id', component: PokemonInfoComponent },
      { path: 'page/:nr', component: PokemonListComponent },
      { path: '', redirectTo: '/page/1', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
