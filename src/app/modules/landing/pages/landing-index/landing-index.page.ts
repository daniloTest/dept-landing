import { Component, OnInit } from '@angular/core';
import { CaseReadDto } from '@library';

@Component({
  selector: 'app-landing-index',
  templateUrl: './landing-index.page.html',
  styleUrls: ['./landing-index.page.scss']
})
export class LandingIndexPage implements OnInit {


  heroCase: CaseReadDto = {
    routerLink: 'XX_1',
    title: 'WORK',
    category: 'CAT_1',
    industry: 'IND_1'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
