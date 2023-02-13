import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, forkJoin, map, of, ReplaySubject } from 'rxjs';
import { FilterOptions } from '../core/models/pokemon';
import { FilterOptionRestService } from '../core/rest/filter-option.rest.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _filterOptions = new ReplaySubject<FilterOptions>(1);
  filterOptions$ = this._filterOptions.asObservable();

  constructor(
    private filterOptionRest: FilterOptionRestService,
    private toastr: ToastrService
  ) {}

  // TODO: Better to use a specific error modal as opposed to alert.
  // TODO: All this repetition is unecessary. Refactor.
  getFilterOptions() {
    forkJoin({
      abilities: this.filterOptionRest
        .getAbilitiesOptions()
        .pipe(map((resp) => resp.results)),
      formsOfPoke: this.filterOptionRest
        .getFormsOfPokeOptions()
        .pipe(map((resp) => resp.results)),
      gameIndices: this.filterOptionRest
        .getGameIndicesOptions()
        .pipe(map((resp) => resp.results)),
      heldItems: this.filterOptionRest
        .getHeldItemsOptions()
        .pipe(map((resp) => resp.results)),
      moves: this.filterOptionRest
        .getMovesOptions()
        .pipe(map((resp) => resp.results)),
      species: this.filterOptionRest
        .getSpeciesOptions()
        .pipe(map((resp) => resp.results)),
      stats: this.filterOptionRest
        .getStatsOptions()
        .pipe(map((resp) => resp.results)),
      typesOfPoke: this.filterOptionRest
        .getTypesOfPokeOptions()
        .pipe(map((resp) => resp.results)),
    })
      .pipe(
        catchError((err) => {
          this.toastr.error(
            'There was an error loading the filter options. Please try again later.'
          );
          return of(err);
        })
      )
      .subscribe((filterOptions) => {
        this._filterOptions.next(filterOptions);
      });
    return this.filterOptions$;
  }
}
