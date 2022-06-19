import { Component, Input, OnInit } from '@angular/core';
import { CaseReadDto } from '@library';

@Component({
  selector: 'app-cases-featured-grid',
  templateUrl: './cases-featured-grid.component.html',
  styleUrls: ['./cases-featured-grid.component.scss']
})
export class CasesFeaturedGridComponent implements OnInit {

  @Input() cases: CaseReadDto[] = [];
  @Input() featuredPosition: 'left' | 'right' = 'left';

  constructor() { }

  ngOnInit(): void {
  }

}
