import {PokemonEntry} from './pokemon-entry';
import {PokemonAbilityInfo} from './pokemon-ability-info';
import {PokemonType} from './pokemon-type';
import {PokemonStats} from './pokemon-stats';
import {PokemonDescription} from './pokemon-description';

export class Pokemon {
  baseInfo: PokemonEntry;
  abilityInfo: PokemonAbilityInfo;
  descriptions: PokemonDescription[];
  types: PokemonType[];
  stats: PokemonStats;


  constructor(baseInfo: PokemonEntry, abilityInfo: PokemonAbilityInfo, descriptions: PokemonDescription[], types: PokemonType[], stats: PokemonStats) {
    this.baseInfo = baseInfo;
    this.abilityInfo = abilityInfo;
    this.descriptions = descriptions;
    this.types = types;
    this.stats = stats;
  }
}
