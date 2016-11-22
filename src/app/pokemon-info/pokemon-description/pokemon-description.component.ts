import {Component, Input} from '@angular/core';
import {PokemonDescription} from '../../shared/models/pokemon-description';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.css']
})
export class PokemonDescriptionComponent {
  @Input() descriptions: PokemonDescription[];
}
