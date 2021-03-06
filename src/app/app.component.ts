import { Component, OnDestroy, OnInit } from '@angular/core';
import {  DataService } from './data.service';
import { Article } from './Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  keyword = 'demo1';

  data: Article[];

  constructor(private datasvc: DataService){}

  ngOnInit(): void {
    this.datasvc.load()
      .subscribe(result => {
      this.data = result;
    });
  }

  ngOnDestroy(): void {
    console.log(' app component destroyed!');
  }

  // alt+ O
  doSearch(value: string): void{
    this.keyword = value;
  }

  removeArticle(id: number): void{
    console.log(`Removing article ${id}`);
  }
}


