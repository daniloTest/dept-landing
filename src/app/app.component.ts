import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('page') page?: ElementRef;
  isMenuOpen: boolean = false;
  isScroll: boolean = false;

  ngOnInit(): void {
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
