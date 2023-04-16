import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CreateContactConfig, ViewContactConfig } from 'projects/ngym-contacts/src/lib/model/config';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
  contactConfig!: CreateContactConfig;
  viewContactConfig!: ViewContactConfig;
  name!: string;
  contact!: any;

  constructor() { }

  ngOnInit(): void {
    this.contactConfig = {
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
      tagOptions: ['friends', 'testers', 'developers', 'ddd', 'dsffsdfd', 'dsa', 'dasfsf', 'dadfdsfsdf', 'dada'],
      phoneTypeArray: ['other', 'home'],
      addressTypeArray: ['Mobile', 'home', 'work'],
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

    this.viewContactConfig = {
      pageHeader: 'Add New Contact',
      editButtonText: 'Edit',
      sendEmailText: 'Send Email',
      emailPlaceholder: 'Email',
      phonePlaceholder: 'Telefon',
      addressPlaceholder: 'Adres',
      managerPlaceholder: 'Manager',
      registerNoPlaceholder: 'Register',
      notesPlaceholder: 'Notes',
      otherTypePlaceholder: 'Other',
      homeTypePlaceholder: 'Home',
      phoneTypePlaceholder: 'Phone',
      mobileTypePlaceholder: 'Mobile',
      workTypePlaceholder: 'Work'

    }

    this.viewContact();
  }

  viewContact(): void {
    this.contact = {
      "manager": "Avedis",
      "fullname": "Amock Test",
      "firstname": "Amock",
      "lastname": "Test",
      "email": ["yagiz@cpm.com", "yagiz@yaani.com"],
      "addresses": [{ "type": "work", "data": { "city": "istanbul", "country": "tr", "postalcode": "4434", "state": "amas", "street": "bilim" } }],
      "phone": [{ "type": "other", "data": "2163630988" }, { "type": "home", "data": "33333333" }],
      "notes": "BU B\u0130R NOT",
      "jobtitle": "Mr",
      "company": "Turkcell",
      "id": "6805",
      "create_date": "1680618794000",
      "tag_names": ["a"]
    };

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

  test(e: any): void {
    debugger;
    this.name = e.firstname;
  }

}
