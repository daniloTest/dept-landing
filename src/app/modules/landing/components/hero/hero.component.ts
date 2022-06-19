import { Component, Input, OnInit } from '@angular/core';
import { CaseReadDto } from '@library';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() case?: CaseReadDto;

  constructor() { }

  ngOnInit(): void {
  }

}
