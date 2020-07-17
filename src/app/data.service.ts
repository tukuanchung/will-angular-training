import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './Article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // rsjs
  load(): Observable<Article[]>{
    return this.http.get<Article[]>('/api/articles.json');
  }
}
