import {PokemonAbility} from './pokemon-ability';

export class PokemonAbilityInfo {
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  category: string;


  constructor(height: number, weight: number, abilities: PokemonAbility[], category: string) {
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.category = category;
  }
}
