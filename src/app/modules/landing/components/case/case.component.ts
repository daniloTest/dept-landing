import { Component, Input, OnInit } from '@angular/core';
import { CaseReadDto } from '@library';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  @Input() case?: CaseReadDto;
  @Input() type: 'normal' | 'compact' = 'normal';

  constructor() { }

  ngOnInit(): void {
  }

}
