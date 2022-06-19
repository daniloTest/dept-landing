import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output() toggleMenu = new EventEmitter<void>();
  isWhite: boolean = false;

  @Input() set isScroll(value: boolean) {
    this.isWhite = value;
  }


  constructor() { }

  ngOnInit(): void {

  }

}
