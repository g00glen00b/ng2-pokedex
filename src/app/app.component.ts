import { Component } from '@angular/core';
import {PokemonService} from './shared/services/pokemon.service';

@Component({
  providers: [PokemonService],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works!';


  constructor(service: PokemonService) {
    service.findAll(0, 10).subscribe(pokemons => console.log(pokemons));
    service.findOne(1).subscribe(pokemon => console.log(pokemon));
  }
}
