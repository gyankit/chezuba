import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonData } from '../models/json-data';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<JsonData[]> {
    return this.http.get<JsonData[]>(this.url);
  }
}
