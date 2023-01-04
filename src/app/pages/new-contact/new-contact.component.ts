import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContactConfig } from 'projects/ngym-contacts/src/lib/model/config';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
  contactConfig!: ContactConfig;

  constructor() { }

  ngOnInit(): void {
    this.contactConfig = {
      apiUrl: 'test',
      headers: this.getV2Headers(),
      pageHeader: 'test',
      namePlaceholder: 'test',
      surnamePlaceholder: 'test',
      companyPlaceholder: 'test',
      jobtitlePlaceholder: 'test',
      emailPlaceholder: 'email',
      phonePlaceholder: 'telefon',
      tagPlaceholder: 'etiketler',
      tagOptions: ['arkadaşlar', 'testerler', 'developerlar'],
      phoneTypeArray: ['Mobile', 'home'],
      addressTypeArray: ['Mobile', 'home', 'ETST'],
      countryPlaceholder: 'ülke',
      cityPlaceholder: 'şehir',
      postalCodePlaceholder: 'posta kodu',
      statePlaceholder: 'state',
      streetPlaceholder: 'sokak',
      notePlaceholder: 'not',
      addNoteButtonText: 'note ekle',
      cancelButtonText: 'cancel',
      saveButtonText: 'save',
      addEmailButtonText: 'email ekle',
      addTagButtonText: 'etiket ekle',
      addAddressButtonText: 'adres ekle',
      addPhoneButtonText: 'telefon ekle'
    }
  }

  getV2Headers(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders({
      'Accept': 'application/x.yaanimail.v2+json'
    });
    return headers;
  }

  onAdd(e: any): void {
    console.log(e);
  }

  onCancel(): void {

  }

  onError(e: any): void {
    console.log(e);
  }

}
