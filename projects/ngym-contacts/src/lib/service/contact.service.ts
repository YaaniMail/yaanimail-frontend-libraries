import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../model/contact';
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

    updateContact(url: string, formData: FormData, headers: HttpHeaders): Observable<any> {
        return this.http.put(url, formData, { headers: headers });
    }
}
