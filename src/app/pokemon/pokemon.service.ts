import { Injectable } from '@angular/core';
import { forkJoin, map, ReplaySubject, switchMap, take } from 'rxjs';
import { FilterOptions, Pokemon } from '../core/models/pokemon';
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

  filterPokemon(filter: FilterOptions) {
    this.pokemon$.pipe(take(1)).subscribe(pokemon => {
      const filteredPokemon = pokemon.filter(p => {
        const filterableP = this.mapFilterableItems(p);
        return filterableP.abilities.some(x => filter.abilities.length < 1 || filter.abilities.includes(x)) &&
          filterableP.formsOfPoke.some(x => filter.formsOfPoke.length < 1 || filter.formsOfPoke.includes(x)) &&
          filterableP.gameIndices.some(x => filter.gameIndices.length < 1 ||filter.gameIndices.includes(x)) &&
          filterableP.heldItems.some(x => filter.heldItems.length < 1 ||filter.heldItems.includes(x)) &&
          filterableP.moves.some(x => filter.moves.length < 1 ||filter.moves.includes(x)) &&
          // filterableP.species.some(x => filter.species.includes(x)) && // not Array
          filterableP.stats.some(x => filter.stats.length < 1 ||filter.stats.includes(x)) &&
          filterableP.typesOfPoke.some(x => filter.typesOfPoke.length < 1 ||filter.typesOfPoke.includes(x))

      })
      this._pokemon.next(filteredPokemon);
     })
  }

  mapFilterableItems(pokemon: Pokemon) {
    return {
      abilities: pokemon.abilities.map(a => a.ability.name),
      formsOfPoke: pokemon.forms.map(f => f.name),
      gameIndices: pokemon.game_indices.map(g => g.version.name),
      heldItems: pokemon.held_items.map(h => h.item.name),
      moves: pokemon.moves.map(m => m.move.name),
      species: pokemon.species.name,
      stats: pokemon.stats.map(s => s.stat.name),
      typesOfPoke: pokemon.types.map(t => t.type.name)
    }
   }
}
