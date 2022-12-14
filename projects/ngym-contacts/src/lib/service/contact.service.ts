import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(
        private http: HttpClient
    ) { }

    createContact(url: string, formData: FormData, headers: HttpHeaders): Observable<any> {
        return this.http.post(url, formData, { headers: headers });
    }
}
