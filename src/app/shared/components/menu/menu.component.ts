import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // used to handle change of domain when deploying to github pages, should not be necessary
  BASE_URL = environment.baseUrl;

  @Output() toggleMenu = new EventEmitter<void>();
  @Input() isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
