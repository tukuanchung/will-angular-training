import { Component } from '@angular/core';
import {  DataService } from './data.service';
import { Article } from './Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'demo1';

  data: Article[];

  constructor(private datasvc: DataService){
    this.data = datasvc.data;
  }
  // alt+ O
  doSearch(value: string): void{
    this.keyword = value;
  }
}


