import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  isShowSortPanel = false;

  toggleSortPanel() {
    this.isShowSortPanel = !this.isShowSortPanel;
  }
}
