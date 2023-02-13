import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterOptions } from '../core/models/pokemon';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filters$: Observable<FilterOptions>;

  constructor(
    private filterService: FilterService,
  ) {
    this.filters$ = this.filterService.getFilterOptions()
   }

  ngOnInit(): void {
  }

}
