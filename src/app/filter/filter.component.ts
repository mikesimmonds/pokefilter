import { Component, OnInit } from '@angular/core';
import { FilterOptions } from '../core/models/pokemon';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(
    private filterService: FilterService,
  ) {
    this.filterService.getFilterOptions().subscribe(filters => {
      this.createFilters(filters);
    })
   }

  ngOnInit(): void {
  }

  createFilters(filters: FilterOptions) {
    console.log(`filters: `, filters)
  }

}
