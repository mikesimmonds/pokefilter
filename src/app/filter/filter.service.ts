import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, forkJoin, of, ReplaySubject } from 'rxjs';
import { FilterOptions } from '../core/models/pokemon';
import { FilterOptionRestService } from '../core/rest/filter-option.rest.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private _filterOptions = new ReplaySubject<FilterOptions>(1);
  filterOptions$ = this._filterOptions.asObservable();

  constructor(
    private filterOptionRest: FilterOptionRestService,
    private toastr: ToastrService,
  ) { }

  // TODO: Better to use a specific error modal as opposed to alert.
  getFilterOptions() {
    forkJoin({
      abilities: this.filterOptionRest.getAbilitiesOptions(),
      formsOfPoke: this.filterOptionRest.getFormsOfPokeOptions(),
      gameIndices: this.filterOptionRest.getGameIndicesOptions(),
      heldItems: this.filterOptionRest.getHeldItemsOptions(),
      moves: this.filterOptionRest.getMovesOptions(),
      species: this.filterOptionRest.getSpeciesOptions(),
      stats: this.filterOptionRest.getStatsOptions(),
      typesOfPoke: this.filterOptionRest.getTypesOfPokeOptions()
    })
      .pipe(catchError(err => {
        this.toastr.error('There was an error loading the filter options. Please try again later.')
        return of(err);
       }))
      .subscribe(filterOptions => {
      this._filterOptions.next(filterOptions);
    });
    return this.filterOptions$;
   }
}
