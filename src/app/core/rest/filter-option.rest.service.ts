import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ability, FormOfPoke, GameIndex, HeldItem, Move, PaginatedResponse, Species, Stat, TypeOfPoke } from '../models/pokemon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilterOptionRestService {

  constructor(private http: HttpClient) {}

  getAbilitiesOptions() {
    const url = environment.baseUrl + 'ability';
    return this.http.get<PaginatedResponse<Ability>>(url);
  }

  getFormsOfPokeOptions() {
    const url = environment.baseUrl + 'form';
    return this.http.get<PaginatedResponse<FormOfPoke>>(url);
  }

  getGameIndicesOptions() {
    const url = environment.baseUrl + 'game-indice';
    return this.http.get<PaginatedResponse<GameIndex>>(url);
  }

  getHeldItemsOptions() {
    const url = environment.baseUrl + 'held-item';
    return this.http.get<PaginatedResponse<HeldItem>>(url);
  }

  getMovesOptions() {
    const url = environment.baseUrl + 'move';
    return this.http.get<PaginatedResponse<Move>>(url);
  }

  getSpeciesOptions() {
    const url = environment.baseUrl + 'species';
    return this.http.get<PaginatedResponse<Species>>(url);
  }

  getStatsOptions() {
    const url = environment.baseUrl + 'stat';
    return this.http.get<PaginatedResponse<Stat>>(url);
  }

  getTypesOfPokeOptions() {
    const url = environment.baseUrl + 'type';
    return this.http.get<PaginatedResponse<TypeOfPoke>>(url);
  }
}
