import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('page') page?: ElementRef;
  isMenuOpen: boolean = false;
  isScroll: boolean = false;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    // scroll is not on window but on page element, necessary to reset scrollTop value if staying in same component
    this._router.events.subscribe({
      next: (val) => {
        if (val instanceof NavigationEnd) {
          this.page?.nativeElement.scrollTo(0, 0);
        }
      }
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onScroll(event: any): void {

    if (this.page?.nativeElement.scrollTop == 0) {
      this.isScroll = false;
      return;
    }

    this.isScroll = true;
  }
}
