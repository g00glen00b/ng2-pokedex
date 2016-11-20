import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../shared/services/pokemon.service';
import {Pokemon} from '../shared/models/pokemon';
import {Title} from '@angular/platform-browser';

@Component({
  providers: [PokemonService],
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html'
})
export class PokemonInfoComponent implements OnInit {
  pokemon: Pokemon;

  constructor(private _route: ActivatedRoute, private _service: PokemonService, private _titleService: Title) { }

  ngOnInit() {
    let observable = this._route.params
      .map(params => params['id'])
      .flatMap(id => this._service.findOne(id))
      .share();
    observable.subscribe(pokemon => this.pokemon = pokemon);
    observable.subscribe(pokemon => this._titleService.setTitle(`#${pokemon.baseInfo.id} - ${pokemon.baseInfo.name}`));
  }

}
