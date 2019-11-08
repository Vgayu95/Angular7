import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient) { }
  getLineData() {
    return this.http.get<any[]>('../assets/data/snapLineData.json');
  }
}
