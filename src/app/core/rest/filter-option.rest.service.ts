import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ability, FormOfPoke, GameIndex, HeldItem, Move, Species, Stat, TypeOfPoke } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class FilterOptionRestService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getAbilitiesOptions() {
    const url = 'ability';
    return this.http.get<Array<Ability>>(url);
  }

  getFormsOfPokeOptions() {
    const url = 'form';
    return this.http.get<Array<FormOfPoke>>(url);
  }

  getGameIndicesOptions() {
    const url = 'game-indice';
    return this.http.get<Array<GameIndex>>(url);
  }

  getHeldItemsOptions() {
    const url = 'held-item';
    return this.http.get<Array<HeldItem>>(url);
  }

  getMovesOptions() {
    const url = 'move';
    return this.http.get<Array<Move>>(url);
  }

  getSpeciesOptions() {
    const url = 'species';
    return this.http.get<Array<Species>>(url);
  }

  getStatsOptions() {
    const url = 'stat';
    return this.http.get<Array<Stat>>(url);
  }

  getTypesOfPokeOptions() {
    const url = 'type';
    return this.http.get<Array<TypeOfPoke>>(url);
  }
}
