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
  contactConfig2!: ContactConfig;

  constructor() { }

  ngOnInit(): void {
    this.contactConfig = {
      apiUrl: 'test',
      headers: this.getV2Headers(),
      pageHeader: 'Add New Contact',
      namePlaceholder: 'Name',
      surnamePlaceholder: 'Surname',
      companyPlaceholder: 'Company',
      jobtitlePlaceholder: 'Job Title',
      emailPlaceholder: 'Email',
      phonePlaceholder: 'Phone',
      tagPlaceholder: 'Tag',
      tagOptions: ['friends', 'testers', 'developers'],
      phoneTypeArray: ['Mobile', 'home'],
      addressTypeArray: ['Mobile', 'home', 'ETST'],
      countryPlaceholder: 'Country',
      cityPlaceholder: 'County',
      postalCodePlaceholder: 'posta kodu',
      statePlaceholder: 'state',
      streetPlaceholder: 'sokak',
      notePlaceholder: 'not',
      addNoteButtonText: 'Add Note',
      cancelButtonText: 'Cancel',
      saveButtonText: 'Save',
      addEmailButtonText: 'Add email',
      addTagButtonText: 'Add tag',
      addAddressButtonText: 'Add address',
      addPhoneButtonText: 'Add Phone'
    }

    this.contactConfig2 = {
      apiUrl: 'https://amock.io/api/yagizozturk/view-contact',
      headers: this.getV2Headers(),
      pageHeader: 'Add New Contact',
      namePlaceholder: 'Name',
      surnamePlaceholder: 'Surname',
      companyPlaceholder: 'Company',
      jobtitlePlaceholder: 'Job Title',
      emailPlaceholder: 'Email',
      phonePlaceholder: 'Phone',
      tagPlaceholder: 'Tag',
      tagOptions: ['friends', 'testers', 'developers'],
      phoneTypeArray: ['Mobile', 'home'],
      addressTypeArray: ['Mobile', 'home', 'ETST'],
      countryPlaceholder: 'Country',
      cityPlaceholder: 'County',
      postalCodePlaceholder: 'posta kodu',
      statePlaceholder: 'state',
      streetPlaceholder: 'sokak',
      notePlaceholder: 'not',
      addNoteButtonText: 'Add Note',
      cancelButtonText: 'Cancel',
      saveButtonText: 'Save',
      addEmailButtonText: 'Add email',
      addTagButtonText: 'Add tag',
      addAddressButtonText: 'Add address',
      addPhoneButtonText: 'Add Phone'
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
