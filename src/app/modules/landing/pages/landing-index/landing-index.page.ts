import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseReadDto } from '@library';
import { CASES_DATA } from 'src/app/library/data/cases.const';

@Component({
  selector: 'app-landing-index',
  templateUrl: './landing-index.page.html',
  styleUrls: ['./landing-index.page.scss']
})
export class LandingIndexPage implements OnInit {


  filtersFG: FormGroup = new FormGroup({
    industry: new FormControl(''),
    category: new FormControl('')
  });

  cases: CaseReadDto[] = [];
  displayedCases: CaseReadDto[] = [];

  industries: Set<string> = new Set<string>();
  categories: Set<string> = new Set<string>();

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // TODO handle async and loading state
    this.fetchData();
    this._buildFilters();

    //on filters change update displayed cases
    this._listenForFilters();

    // get filter params from url and patch filters
    this._patchFiltersFromUrl();


  }

  fetchData(): void {
    this.cases = CASES_DATA || [];
    this.displayedCases = this.cases;

  }

  private _patchFiltersFromUrl(): void {
    const params = this._activatedRoute.snapshot.queryParams;
    if (params) {

      this.filtersFG.patchValue({
        ...params
      });
    }
  }

  private _updateUrlQueryParams(category: string, industry: string): void {
    this._router.navigate([], {
      queryParams: {
        category, industry
      },
      queryParamsHandling: 'merge',
    });
  }

  private _buildFilters(): void {
    for (const element of this.cases) {
      this.industries.add(element.industry);
      this.categories.add(element.category);
    }
  }

  private _listenForFilters(): void {
    this.filtersFG.valueChanges
      .subscribe({
        next: (formValue) => {

          this._updateUrlQueryParams(formValue.category, formValue.industry);
          this.displayedCases = [...this.cases];

          // no filters
          if (!formValue.category && !formValue.industry) {
            return;
          }

          // both filters
          if (formValue.category && formValue.industry) {
            this.displayedCases = this.displayedCases.filter(c => c.category === formValue.category && c.industry === formValue.industry);
            return;
          }

          if (formValue.category && !formValue.industry) {
            this.displayedCases = this.displayedCases.filter(c => c.category === formValue.category);
            return;
          }

          if (formValue.industry) {
            this.displayedCases = this.displayedCases.filter(c => c.industry === formValue.industry);
            return;
          }
        }
      });
  }

  getSlicedCases(startIndex: number, numberOfElements: number): CaseReadDto[] {

    if (!this.cases.length) {
      return [];
    }

    let endIndex = startIndex + numberOfElements;
    if (this.cases.length < endIndex) {
      endIndex = this.cases.length;
    }
    return this.displayedCases.slice(startIndex, endIndex);
  }
}
