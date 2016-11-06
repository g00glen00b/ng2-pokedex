export class PokemonEntry {
  id: number;
  name: string;
  sprite: string;


  constructor(id: number, name: string, sprite: string) {
    this.id = id;
    this.name = name;
    this.sprite = sprite;
  }
}
