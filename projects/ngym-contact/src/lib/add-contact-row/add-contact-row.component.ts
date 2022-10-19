import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { AddContactItem } from '../model/add-contact-item';

@Component({
    selector: 'ngym-add-contact-row',
    templateUrl: './add-contact-row.component.html'
})
export class AddContactRowComponent {
    @Input() contact!: AddContactItem;
    @Input() roles: { role: string, label: string }[] = [];
    @Input() profilePhotoRefresher = new Subject<{ email: string, data: any }>();
    @Output() onGetProfilePhotoEmitter = new EventEmitter<string>();
    @Output() addContactEvent = new EventEmitter<{ index: number, contact: any }>();

    constructor() { }

    addContactToList(index: number, contact: any) {
        this.addContactEvent.emit({ index: index, contact: contact });
    }

    getProfilePhoto(email: string): void {
        this.onGetProfilePhotoEmitter.emit(email);
    }
}