export class PokemonAbility {
  name: string;
  hidden: boolean;
  order: number;

  constructor(name: string, hidden: boolean, order: number) {
    this.name = name;
    this.hidden = hidden;
    this.order = order;
  }
}
