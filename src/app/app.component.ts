import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'demo1';
  // alt+ O
  doSearch(value: string): void{
    this.keyword = value;
  }
}
