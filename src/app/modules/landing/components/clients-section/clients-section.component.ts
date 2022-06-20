import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-section',
  templateUrl: './clients-section.component.html',
  styleUrls: ['./clients-section.component.scss']
})
export class ClientsSectionComponent implements OnInit {

  clientLogos: string[] = [
    'nivea',
    'mona',
    'nivea',
    'mona',
    'nivea',
    'mona',
    'nivea',
    'mona',
    'nivea',
    'mona',
    'nivea',
    'mona',
    'nivea',
    'mona',
    'nivea',
    'mona',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
