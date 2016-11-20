import {Component, Input} from '@angular/core';
import {PokemonEntry} from '../../shared/models/pokemon-entry';

@Component({
  selector: 'app-pokemon-entry',
  templateUrl: './pokemon-entry.component.html'
})
export class PokemonEntryComponent {
  @Input() pokemon: PokemonEntry = null;
  @Input() withLink: boolean = true;

  constructor() { }
}
