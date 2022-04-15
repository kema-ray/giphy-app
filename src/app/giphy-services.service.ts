import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyServicesService {
  // gifs = new BehaviorSubject<any>([])
  constructor(private http: HttpClient) { }

  trendingGifs():Observable<any>{
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=50&rating=g`)
  }

}
