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
  loading: boolean = false;
  failed: boolean = false;

  constructor(private _route: ActivatedRoute, private _service: PokemonService, private _titleService: Title) { }

  ngOnInit() {
    let observable = this._route.params
      .map(params => params['id'])
      .flatMap(id => this._service.findOne(id))
      .share();
    this.loading = true;
    this.failed = false;
    observable.subscribe(pokemon => {
      this.pokemon = pokemon;
      this.loading = false;
    }, () => {
      this.loading = false;
      this.failed = true;
    });
    observable.subscribe(pokemon => this._titleService.setTitle(`#${pokemon.baseInfo.id} - ${pokemon.baseInfo.name}`));
  }

}
