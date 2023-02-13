import { Injectable } from '@angular/core';
import { forkJoin, map, ReplaySubject, switchMap } from 'rxjs';
import { Pokemon } from '../core/models/pokemon';
import { PokemonRestService } from '../core/rest/pokemon.rest.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _pokemon = new ReplaySubject<Array<Pokemon>>(1);
  pokemon$ = this._pokemon.asObservable();

  constructor(
    private pokemonRest: PokemonRestService
  ) { }

  // TODO: Error handling in case of single pokemon failure.
  getAllPokemon() {
    this.pokemonRest.getAllOriginalPokemon()
      .pipe(
        map(paginatedResponse => paginatedResponse.results),
        switchMap(pokemon => {
        return forkJoin(pokemon.map(p => this.pokemonRest.getPokemonByUrl(p.url)));
      }))
      .subscribe(allPokemon => {
        this._pokemon.next(allPokemon);
      })
    return this.pokemon$;
  }
}
