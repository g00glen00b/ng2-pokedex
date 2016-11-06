import {PokemonEntry} from './pokemon-entry';

export class PokemonList {
  pokemons: PokemonEntry[];
  count: number;


  constructor(pokemons: PokemonEntry[], count: number) {
    this.pokemons = pokemons;
    this.count = count;
  }
}
