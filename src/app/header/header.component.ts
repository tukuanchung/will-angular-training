import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  siteName = 'Hello ~~~';
  subtitle = "記載著 Will 在網路世界的學習心得與技術分享";
  sitelogo = "/assets/images/logo.png";

  ngOnInit(): void {
    setTimeout(() => {
      this.siteName = 'Time Up';
    }, 2000);
  }

  changeTitle(): void {
    this.siteName = 'HELLO~~~~';
  }
}
