import { Component, HostListener, OnInit } from '@angular/core';
import { CaseReadDto } from '@library';

@Component({
  selector: 'app-landing-index',
  templateUrl: './landing-index.page.html',
  styleUrls: ['./landing-index.page.scss']
})
export class LandingIndexPage implements OnInit {


  cases: CaseReadDto[] = [
    {
      routerLink: 'XX_1',
      imageUrl: 'assets/images/cases/image__case-1.jpg',
      title: 'A Summer island in the Netherlands',
      category: 'WORK',
      industry: 'BOL.COM'
    },
    {
      routerLink: 'XX_1',
      title: 'Not some average banking website',
      category: 'WORK',
      industry: 'KEMPEN',
      imageUrl: 'assets/images/cases/image__case-1.jpg'
    },
    {
      routerLink: 'XX_1',
      imageUrl: 'assets/images/cases/image__case-1.jpg',
      title: 'A Summer island in the Netherlands',
      category: 'WORK',
      industry: 'BOL.COM'
    },
    {
      routerLink: 'XX_1',
      title: 'Not some average banking website',
      category: 'WORK',
      industry: 'KEMPEN',
      imageUrl: 'assets/images/cases/image__case-1.jpg'
    },
    {
      routerLink: 'XX_1',
      imageUrl: 'assets/images/cases/image__case-1.jpg',
      title: 'A Summer island in the Netherlands',
      category: 'WORK',
      industry: 'BOL.COM'
    },
    {
      routerLink: 'XX_1',
      title: 'Not some average banking website',
      category: 'WORK',
      industry: 'KEMPEN',
      imageUrl: 'assets/images/cases/image__case-1.jpg'
    },
    {
      routerLink: 'XX_1',
      imageUrl: 'assets/images/cases/image__case-1.jpg',
      title: 'A Summer island in the Netherlands',
      category: 'WORK',
      industry: 'BOL.COM'
    },
    {
      routerLink: 'XX_1',
      title: 'Not some average banking website',
      category: 'WORK',
      industry: 'KEMPEN',
      imageUrl: 'assets/images/cases/image__case-1.jpg'
    },
    {
      routerLink: 'XX_1',
      imageUrl: 'assets/images/cases/image__case-1.jpg',
      title: 'A Summer island in the Netherlands',
      category: 'WORK',
      industry: 'BOL.COM'
    },
    {
      routerLink: 'XX_1',
      title: 'Not some average banking website',
      category: 'WORK',
      industry: 'KEMPEN',
      imageUrl: 'assets/images/cases/image__case-1.jpg'
    },
    {
      routerLink: 'XX_1',
      title: 'Not some average banking website',
      category: 'WORK',
      industry: 'KEMPEN',
      imageUrl: 'assets/images/cases/image__case-1.jpg'
    },
    {
      routerLink: 'XX_1',
      imageUrl: 'assets/images/cases/image__case-1.jpg',
      title: 'A Summer island in the Netherlands',
      category: 'WORK',
      industry: 'BOL.COM'
    },
    {
      routerLink: 'XX_1',
      title: 'Not some average banking website',
      category: 'WORK',
      industry: 'KEMPEN',
      imageUrl: 'assets/images/cases/image__case-1.jpg'
    },
    {
      routerLink: 'XX_1',
      imageUrl: 'assets/images/cases/image__case-1.jpg',
      title: 'A Summer island in the Netherlands',
      category: 'WORK',
      industry: 'BOL.COM'
    },
    {
      routerLink: 'XX_1',
      title: 'Not some average banking website',
      category: 'WORK',
      industry: 'KEMPEN',
      imageUrl: 'assets/images/cases/image__case-1.jpg'
    }
  ];



  constructor() { }

  ngOnInit(): void {

  }

  getSlicedCases(startIndex: number, numberOfElements: number): CaseReadDto[] {

    if (!this.cases.length) {
      return [];
    }

    let endIndex = startIndex + numberOfElements;
    if (this.cases.length < endIndex) {
      endIndex = this.cases.length;
    }
    return this.cases.slice(startIndex, endIndex);
  }
}
