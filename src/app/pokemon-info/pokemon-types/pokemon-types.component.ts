import {Component, Input} from '@angular/core';
import {PokemonType} from '../../shared/models/pokemon-type';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.css']
})
export class PokemonTypesComponent {
  private _colors = {
    'poison': 'purple lighten-1',
    'ground': 'brown lighten-3',
    'normal': 'grey',
    'fighting': 'red lighten-1',
    'flying': 'deep-purple lighten-4',
    'rock': 'brown darken-2',
    'bug': 'light-green lighten-2',
    'ghost': 'deep-purple darken-3',
    'steel': 'blue-grey lighten-2',
    'fire': 'deep-orange darken-2',
    'water': 'blue lighten-1',
    'grass': 'green darken-2',
    'electric': 'yellow',
    'psychic': ' pink lighten-2',
    'ice': 'light-blue lighten-4',
    'dragon': 'deep-purple lighten-1',
    'dark': 'grey darken-3',
    'fairy': 'pink lighten-4'
  };
  @Input() types: PokemonType[];

  getColor(type: PokemonType) {
    return this._colors[type.type];
  }
}
