import {Component, Input, OnInit, OnChanges, animate, style, transition, trigger, state} from '@angular/core';
import {PokemonDescription} from '../../shared/models/pokemon-description';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.css'],
  animations: [
    trigger('cardState', [
      state('Alpha Sapphire', style({ backgroundColor: '#304ffe' })),
      state('Omega Ruby', style({ backgroundColor: '#b71c1c' })),
      state('Y', style({ backgroundColor: '#1e88e5' })),
      state('X', style({ backgroundColor: '#b71c1c' })),
      state('White 2', style({ backgroundColor: '#ffccbc' })),
      state('Black 2', style({ backgroundColor: '#263238', color: '#eceff1' })),
      state('White', style({ backgroundColor: '#cfd8dc' })),
      state('Black', style({ backgroundColor: '#212121', color: '#eceff1' })),
      state('Soulsilver', style({ backgroundColor: '#b0bec5' })),
      state('Heartgold', style({ backgroundColor: '#ff7043' })),
      state('Platinum', style({ backgroundColor: '#673ab7', color: '#ede7f6' })),
      state('Diamond', style({ backgroundColor: '#1a237e', color: '#e8eaf6' })),
      state('Pearl', style({ backgroundColor: '#b388ff' })),
      state('Firered', style({ backgroundColor: '#ff5722' })),
      state('Leafgreen', style({ backgroundColor: '#9ccc65' })),
      state('Emerald', style({ backgroundColor: '#66bb6a' })),
      state('Ruby', style({ backgroundColor: '#b71c1c' })),
      state('Sapphire', style({ backgroundColor: '#1565c0', color: '#e3f2fd' })),
      state('Gold', style({ backgroundColor: '#ffab00' })),
      state('Silver', style({ backgroundColor: '#757575' })),
      state('Crystal', style({ backgroundColor: '#c5cae9' })),
      state('Red', style({ backgroundColor: '#d50000' })),
      state('Blue', style({ backgroundColor: '#0d47a1', color: '#e3f2fd' })),
      state('Yellow', style({ backgroundColor: '#fdd835' })),
      transition('* => *', animate('500ms ease-in'))
    ]),
    trigger('descriptionState', [
      transition('void => *', [style({opacity: 0}), animate('500ms ease-in', style({opacity: 1}))])
    ])
  ]
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
