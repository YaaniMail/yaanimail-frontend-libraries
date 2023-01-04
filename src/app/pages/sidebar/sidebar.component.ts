import { Component, OnInit } from '@angular/core';
import { Logo } from 'ngym-prelogin-header';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  logo!: Logo;

  constructor() { }

  ngOnInit(): void {
    this.logo = new Logo('../assets/yaanimail2x-enterprise.png');
  }
}
