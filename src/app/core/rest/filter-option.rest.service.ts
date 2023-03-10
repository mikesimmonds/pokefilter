import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Ability,
  BaseFilterResponse,
  FormOfPoke,
  GameIndex,
  HeldItem,
  Move,
  PaginatedResponse,
  Species,
  Stat,
  TypeOfPoke,
} from '../models/pokemon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilterOptionRestService {

  // TODO: The API is returning unrelated filter options aas they are for all of the pokeon in the pokeApi, not just the initial 151.
  filterCountLimit = 5000;

  constructor(private http: HttpClient) {}

  getAbilitiesOptions() {
    const url = environment.baseUrl + 'ability';
    return this.http.get<PaginatedResponse<BaseFilterResponse>>(url, {
      params: { limit: this.filterCountLimit },
    });
  }

  getFormsOfPokeOptions() {
    const url = environment.baseUrl + 'pokemon-form';
    return this.http.get<PaginatedResponse<BaseFilterResponse>>(url, {
      params: { limit: this.filterCountLimit },
    });
  }

  getGameIndicesOptions() {
    const url = environment.baseUrl + 'version';
    return this.http.get<PaginatedResponse<BaseFilterResponse>>(url, {
      params: { limit: this.filterCountLimit },
    });
  }

  getHeldItemsOptions() {
    const url = environment.baseUrl + 'item';
    return this.http.get<PaginatedResponse<BaseFilterResponse>>(url, {
      params: { limit: this.filterCountLimit },
    });
  }

  getMovesOptions() {
    const url = environment.baseUrl + 'move';
    return this.http.get<PaginatedResponse<BaseFilterResponse>>(url, {
      params: { limit: this.filterCountLimit },
    });
  }

  getSpeciesOptions() {
    const url = environment.baseUrl + 'pokemon-species';
    return this.http.get<PaginatedResponse<BaseFilterResponse>>(url, {
      params: { limit: this.filterCountLimit },
    });
  }

  getStatsOptions() {
    const url = environment.baseUrl + 'stat';
    return this.http.get<PaginatedResponse<BaseFilterResponse>>(url, {
      params: { limit: this.filterCountLimit },
    });
  }

  getTypesOfPokeOptions() {
    const url = environment.baseUrl + 'type';
    return this.http.get<PaginatedResponse<BaseFilterResponse>>(url, {
      params: { limit: this.filterCountLimit },
    });
  }
}
