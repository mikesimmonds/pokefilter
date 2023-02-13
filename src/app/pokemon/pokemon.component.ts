import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../core/models/pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon$: Observable<Pokemon[]>

  constructor(
    private pokemonService: PokemonService,
  ) {
    this.pokemon$ = this.pokemonService.getAllPokemon();
   }

  ngOnInit(): void {
  }

}
