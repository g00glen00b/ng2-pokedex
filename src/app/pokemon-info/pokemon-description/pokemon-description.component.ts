import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {PokemonDescription} from '../../shared/models/pokemon-description';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.css']
})
export class PokemonDescriptionComponent implements OnInit, OnChanges {
  @Input() descriptions: PokemonDescription[];
  description: PokemonDescription;

  ngOnInit() {
    this.description = this.getDefaultDescription(this.descriptions);
  }

  ngOnChanges() {
    this.description = this.getDefaultDescription(this.descriptions);
  }

  getDefaultDescription(descriptions: PokemonDescription[]): PokemonDescription {
    if (descriptions == null || descriptions.length == 0) {
      return null;
    } else {
      return descriptions[0];
    }
  }
}
