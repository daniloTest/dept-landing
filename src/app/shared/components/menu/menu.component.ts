import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() toggleMenu = new EventEmitter<void>();
  @Input() isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
