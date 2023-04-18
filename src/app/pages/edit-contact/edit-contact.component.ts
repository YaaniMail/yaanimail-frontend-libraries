import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CreateContactConfig } from 'projects/ngym-contacts/src/lib/model/config';

@Component({
    selector: 'app-edit-contact',
    templateUrl: './edit-contact.component.html'
})
export class EditContactComponent implements OnInit {
    contactConfig!: CreateContactConfig;
    contact!: any;

    constructor() {
        this.viewContact();
    }

    ngOnInit(): void {
        this.contactConfig = {
            apiUrl: 'test',
            headers: this.getV2Headers(),
            pageHeader: 'Edit Contact',
            namePlaceholder: 'Name',
            surnamePlaceholder: 'Surname',
            companyPlaceholder: 'Company',
            jobtitlePlaceholder: 'Job Title',
            emailPlaceholder: 'Email',
            phonePlaceholder: 'Phone',
            tagPlaceholder: 'Tag',
            tagOptions: ['friends', 'testers', 'developers', 'ddd', 'dsffsdfd', 'dsa', 'dasfsf', 'dadfdsfsdf', 'dada'],
            phoneTypeArray: [{ name: "Ev", value: 'Home' }, { name: "İş", value: 'Work' }],
            addressTypeArray: [{ name: "Ev", value: 'Home' }, { name: "İş", value: 'Work' }],
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

    viewContact(): void {
        this.contact =
        {
            "fullname": 'Arkada1 Soyad', "firstname": "Arkada\u015f1", "lastname": "Soyad\u0131", "email": ["arkadas1@gmail.com", "arkadas2@gmail.com", "arkadas3@gmail.com", "arkadas4@gmail.com"], "addresses": [{ "type": "home", "data": { "city": "1", "country": "1", "postalcode": "1", "state": "1" } }, { "type": "other", "data": { "city": "3", "country": "3", "postalcode": "3", "state": "3", "street": "3" } }, { "type": "work", "data": { "city": "2", "country": "2", "postalcode": "2", "state": "2", "street": "2" } }], "phone": [{ "type": "home", "data": "222222" }, { "type": "mobile", "data": "111111" }, { "type": "other", "data": "444444" }, { "type": "work", "data": "333333" }], "notes": "not", "jobtitle": "\u00dcnvan\u0131", "company": "\u015eirketi", "id": "6485", "create_date": "1681827158000", "tag_names": []
        }

    }

    getV2Headers(): HttpHeaders {
        const headers: HttpHeaders = new HttpHeaders({
            'Accept': 'application/x.yaanimail.v2+json'
        });
        return headers;
    }

    onUpdate(e: any): void {
        console.log(e);
    }

    onCancel(): void {

    }

    onError(e: any): void {
        console.log(e);
    }

}
