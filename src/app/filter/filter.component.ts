import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FilterOptions } from '../core/models/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {


  filters$: Observable<FilterOptions>;
  filterForm: any;

  constructor(
    private filterService: FilterService,
    private formBuilder: FormBuilder,
    private pokemonService: PokemonService,
    private toastr: ToastrService
  ) {
    this.filters$ = this.filterService.getFilterOptions()
   }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.filterForm = this.formBuilder.group({
      abilities: [[]],
      formsOfPoke: [[]],
      gameIndices: [[]],
      heldItems: [[]],
      moves: [[]],
      species: [[]],
      stats: [[]],
      typesOfPoke: [[]],
    })
    this.filterForm.valueChanges.subscribe((value: FilterOptions) => {
      console.log(value)
     })
  }

  applyFilter() {
    if (this.filterForm.valid) {
      this.pokemonService.filterPokemon(this.filterForm.value)
    } else {
      this.toastr.error('Cannot submit form as it is invalid')
    }
  }

}
