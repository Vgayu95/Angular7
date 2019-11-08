import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
import {ForkjoinService} from './forkjoin.service';
import { MouseEvent } from '@agm/core';
import { marker } from './forkjoin';
@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss'],
  providers: [ForkjoinService],
})
export class ForkjoinComponent implements OnInit {
  resultName: any;
  currencyName: any;
  currentTime: Date;
  markers: marker[];
  response = [];
  googleData: any;
    latitude = 20.5937;
    longitude = 78.9629;
  constructor(public http: HttpClient, public forkjoinService: ForkjoinService) {
    const request1 = this.http.get('https://restcountries.eu/rest/v1/name/india');
    const request2 = this.http.get('https://restcountries.eu/rest/v1/name/us');
    const request3 = this.http.get('https://restcountries.eu/rest/v1/name/ame');
    const request4 = this.http.get('https://restcountries.eu/rest/v1/name/ja');

    const requestArray = [];
    requestArray.push(request1);
    requestArray.push(request2);
    requestArray.push(request3);
    requestArray.push(request4);

    forkJoin(requestArray).subscribe(results => {
      console.log(results);
      this.response = results;
      this.resultName = [];
      this.currencyName = [];
      this.response.forEach(element => {
        element.forEach((results => {
          const name = results.name;
          this.resultName.push(name);
          const currency = results.currencies;
          currency.forEach((x => {
            this.currencyName.push(x);
          }));
          // console.log(currency);
        }));
      });
    });
    this.forkjoinService.createObservableService()
    .subscribe( data => this.currentTime = data );
  }
  ngOnInit() {
  }
}

