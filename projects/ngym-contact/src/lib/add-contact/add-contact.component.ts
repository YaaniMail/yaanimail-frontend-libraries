import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Tag } from 'ngym-chips';
import { Subject } from 'rxjs';
import { AddContactItem } from '../model/add-contact-item';
import { ContactByRole } from '../model/contact-by-role';

@Component({
    selector: 'ngym-add-contact',
    templateUrl: './add-contact.component.html',
    styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
    roles: { role: string, label: string }[] = [];
    keyword: string = '';
    selectedSearchType: { key: string, label: string } = {
        key: '',
        label: ''
    };
    @Input() searchResult: AddContactItem[] = [];
    @Input() attendees: ContactByRole[] = [];
    @Input() emailPattern: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    @Input() isLoading!: boolean;
    @Input() addAttendeeTitle: string = '';
    @Input() addContactSearchPlaceholder: string = '';
    @Input() noResultLabel: string = '';
    @Input() searchForListingLabel: string = '';
    @Input() buttonCancelLabel: string = '';
    @Input() addSenderLabel: string = '';
    @Input() contactCountLabel: string = '';
    @Input() contactSearchTypeList: { key: string, label: string }[] = [];
    @Input() profilePhotoRefresher = new Subject<{ email: string, data: any }>();
    @Output() onGetProfilePhotoEmitter = new EventEmitter<string>();
    @Output() onSearchEmitter = new EventEmitter<{ searchType: string, keyword: string }>();
    @Output() onScrollDownEmitter = new EventEmitter<{ searchType: string, keyword: string }>();
    @Output() onSaveEmitter = new EventEmitter<ContactByRole[]>();

    constructor(public bsModalRef: BsModalRef) { }

    ngOnInit(): void {
        this.roles = this.attendees.map(attendee => {
            return { role: attendee.name, label: attendee.label };
        });
        if (this.contactSearchTypeList && this.contactSearchTypeList.length > 0) {
            this.selectedSearchType = this.contactSearchTypeList[0];
        }
    }

    setSearchType(type: { key: string, label: string }): void {
        this.selectedSearchType = type;
        this.clearKeyword();
    }

    clearKeyword(): void {
        this.keyword = '';
        this.onKeywordChange(this.keyword);
    }

    onKeywordChange(keyword: string): void {
        this.onSearchEmitter.emit({ searchType: this.selectedSearchType.key, keyword: keyword });
    }

    addContact(addedItem: { index: number, contact: any }): void { // add contact to list with index and remove from all other lists
        this.addContactToRoleList(addedItem.index, addedItem.contact);
    }

    addContactToRoleList(index: number, contact: any) {
        let tempAttendees: ContactByRole[] = JSON.parse(JSON.stringify(this.attendees));

        const isEmailExists = tempAttendees[index].tags.map(tag => tag['email']).indexOf(contact.email) !== -1;
        const isOtherEmailExists = (contact.other_email || '').trim().length > 0 && tempAttendees[index].tags.map(tag => tag['email']).indexOf(contact.other_email) !== -1;

        if (!isEmailExists && !isOtherEmailExists) {
            tempAttendees = this.removeFromOtherRole(tempAttendees, index, contact);
            const tag = this.getTagFromEmail(!isEmailExists ? contact.email : contact.other_email);
            tempAttendees[index].tags.push(tag);
            this.attendees = tempAttendees;
            this.onSaveEmitter.emit(this.attendees);
        }
    }

    getTagFromEmail(email: string): Tag {
        const tag: Tag = new Tag();
        tag['name'] = email;
        tag['display'] = email;
        tag['email'] = email;
        tag['displayValue'] = email;
        tag['value'] = email;
        tag['id'] = Math.floor((1 + Math.random()) * 0x10000);
        return tag;
    }

    removeFromOtherRole(attendees: ContactByRole[], indexOfList: number, contact: any): ContactByRole[] {
        // remove contact from all lists except the list with given index number
        attendees.forEach((element, i) => {
            if (i !== indexOfList) {
                let indexOfMail = element.tags.map(tag => tag['email']).indexOf(contact.email);
                if (indexOfMail === -1) {
                    indexOfMail = element.tags.map(tag => tag['email']).indexOf(contact.other_email);
                }
                if (indexOfMail !== -1) {
                    element.tags.splice(indexOfMail, 1);
                }
            }
        });

        return attendees;
    }

    cancel(): void {
        this.bsModalRef.hide();
    }

    save(): void {
        this.cancel();
    }

    onScrollDown() {
        this.onScrollDownEmitter.emit({ searchType: this.selectedSearchType.key, keyword: this.keyword });
    }

    getProfilePhoto(email: string): void {
        this.onGetProfilePhotoEmitter.emit(email);
    }
}
