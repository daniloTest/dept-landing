import { Component, Input, OnInit } from '@angular/core';
import { CaseReadDto } from '@library';

@Component({
  selector: 'app-cases-grid',
  templateUrl: './cases-grid.component.html',
  styleUrls: ['./cases-grid.component.scss']
})
export class CasesGridComponent implements OnInit {

  @Input() cases: CaseReadDto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
