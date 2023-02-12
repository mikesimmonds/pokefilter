import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonRestService {

  constructor(
    private http: HttpClient
  ) { }

  getAllOriginalPokemon() {
    const url = 'held-item';
    const limit = 151;
    return this.http.get<Array<Pokemon>>(url, {params: {limit: limit}});
  }

  getPokemonById(id: number) {
    const url = 'pokemon/' + id;
    return this.http.get<Pokemon>(url);
  }
}
