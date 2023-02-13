import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaginatedResponse, Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonRestService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllOriginalPokemon() {
    const url = environment.baseUrl + 'pokemon';
    const limit = 151;
    return this.http.get<PaginatedResponse<Pokemon>>(url, {params: {limit: limit}});
  }

  getPokemonById(id: number) {
    const url = environment.baseUrl + 'pokemon/' + id;
    return this.http.get<Pokemon>(url);
  }
}
