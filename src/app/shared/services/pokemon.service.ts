import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {PokemonList} from '../models/pokemon-list';
import {PokemonEntry} from '../models/pokemon-entry';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
  private _baseUrl: string = 'http://pokeapi.co/api/v2';
  private _spriteBaseUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork';
  private _detailRegex = /^http:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)\/$/;

  constructor(private _http: Http) { }

  findAll(offset: number = 0, limit: number = 20): Observable<PokemonList> {
    return this._http
      .get(`${this._baseUrl}/pokemon/?offset=${offset}&limit=${limit}`)
      .map(response => response.json())
      .map(results => this.getList(results));
  }

  getList(data):PokemonList {
    return new PokemonList(_.map(data.results, result => this.getEntry(result)), data.count);
  }

  getEntry(data): PokemonEntry {
    const matches = this._detailRegex.exec(data.url),
          id = matches == null ? null : parseInt(matches[1]),
          sprite = id == null ? null : `${this._spriteBaseUrl}/${id}.png`;
    return new PokemonEntry(id , _.capitalize(data.name), sprite);
  }

}
