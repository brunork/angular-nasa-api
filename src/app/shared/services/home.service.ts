import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiKey = 'YOUR_API_KEY_HERE';
  private api = environment.url + this.apiKey;

  constructor(private http: HttpClient) { }

  get(query: string) {
    const url = this.api + query;
    return this.http.get(url);
  }

}
