import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  siteName = 'Hello ~~~';

  ngOnInit(): void {
    setTimeout(() => {
      this.siteName = 'Time Up';
    }, 2000);
  }

  changeTitle(): void {
    this.siteName = 'HELLO~~~~';
  }
}
