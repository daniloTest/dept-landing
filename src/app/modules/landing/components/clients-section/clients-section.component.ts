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
    'transavia',
    'zalando',
    'tomtom',
    'unilever',
    'adidas',
    'pathe',
    'abn',
    'triumph',
    'microsoft',
    'oxxio',
    'nederlanden',
    'ziggo',
    'walibi',
    'klm',

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
