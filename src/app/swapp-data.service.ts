import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class SwappDataService {

  constructor(private http: Http) { }

  loadData() {
    return this.http.get('http://swapi.co/api/people/')
      .do( res => console.log('Response: ', res) )
      .map(res => res.json())
      .map(data => data.results)
    ;
  }

}
