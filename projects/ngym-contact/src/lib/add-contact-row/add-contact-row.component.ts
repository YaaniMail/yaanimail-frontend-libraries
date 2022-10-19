import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { AddContactItem } from '../model/add-contact-item';

@Component({
    selector: 'ngym-add-contact-row',
    templateUrl: './add-contact-row.component.html'
})
export class AddContactRowComponent implements OnInit {
    @Input() contact!: AddContactItem;
    @Input() contactCountLabel: string = '';
    @Input() roles: { role: string, label: string }[] = [];
    @Input() profilePhotoRefresher = new Subject<{ email: string, data: any }>();
    @Output() onGetProfilePhotoEmitter = new EventEmitter<string>();
    @Output() addContactEvent = new EventEmitter<{ index: number, contact: any }>();

    constructor() { }

    ngOnInit(): void {
        // TODO: NilS
        if (this.contact && (this.contactCountLabel || '').trim().length > 0) {
            this.contactCountLabel = this.contactCountLabel.replace('{{count}}', '' + this.contact.count);
        }
    }

    addContactToList(index: number, contact: any) {
        this.addContactEvent.emit({ index: index, contact: contact });
    }

    getProfilePhoto(email: string): void {
        this.onGetProfilePhotoEmitter.emit(email);
    }
}