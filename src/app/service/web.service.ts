import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WebService {

  constructor(private http: HttpClient) { }

  getMockData(): Observable<any> {
    return this.http.get('https://amock.io/api/yagizozturk/ngym-valid-test');
  }
}
