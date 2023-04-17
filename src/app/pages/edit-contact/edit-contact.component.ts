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
        this.contact = {
            "manager": "Avedis",
            "fullname": "Amock Test",
            "firstname": "Amock",
            "lastname": "Test",
            "email": [],
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

    onUpdate(e: any): void {
        console.log(e);
    }

    onCancel(): void {

    }

    onError(e: any): void {
        console.log(e);
    }

}
