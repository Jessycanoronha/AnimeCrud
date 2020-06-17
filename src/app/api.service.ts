import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anime } from './anime.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://kitsu.io/api/edge/anime?page[limit]=20'
  constructor( private http: HttpClient) { }

  getData(){
    return this.http.get<Anime[]>(this.url);
  }
}
