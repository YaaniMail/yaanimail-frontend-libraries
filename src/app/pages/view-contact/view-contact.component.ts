import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ViewContactConfig } from 'projects/ngym-contacts/src/lib/model/config';
import { Contact } from 'projects/ngym-contacts/src/lib/model/contact';

@Component({
    selector: 'app-view-contact',
    templateUrl: './view-contact.component.html'
})
export class ViewContactComponent implements OnInit {
    viewContactConfig!: ViewContactConfig;
    contact!: any;

    constructor() { }

    ngOnInit(): void {
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

    routeToEdit(): void {

    }

    openCompose(): void {

    }

}
