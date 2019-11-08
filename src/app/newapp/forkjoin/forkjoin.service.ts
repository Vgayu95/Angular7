import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForkjoinService {

  constructor(private http: HttpClient) { }

  createObservableService(): Observable<Date> {

    return new Observable(
        observer => {
              setInterval(() =>
                  observer.next(new Date())
              , 1000);
        }
    );
}
getgoogleData() {
  return this.http.get('../assets/markers.json');
}
}
