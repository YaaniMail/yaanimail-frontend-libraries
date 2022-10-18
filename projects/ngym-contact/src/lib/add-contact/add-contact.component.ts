import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { AddContactItem } from '../model/add-contact-item';
import { ContactByRole } from '../model/contact-by-role';
import { ContactConfig } from '../model/contact-config';
import { ContactSuggestion } from '../model/contact-suggestion';

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
    contactConfig: ContactConfig = new ContactConfig();
    @Input() searchResult: AddContactItem[] = [];
    @Input() attendees: ContactByRole[] = [];
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
    @Output() onSaveEmitter = new EventEmitter<boolean>();

    constructor(public bsModalRef: BsModalRef) { }

    ngOnInit(): void {
        this.roles = this.attendees.map(attendee => {
            return { role: attendee.name, label: attendee.label };
        });
        this.clearConfigs();
        if (this.contactSearchTypeList && this.contactSearchTypeList.length > 0) {
            this.selectedSearchType = this.contactSearchTypeList[0];
        }
    }

    clearConfigs() {
        this.contactConfig = new ContactConfig();
        this.searchResult = [];
    }

    setSearchType(type: { key: string, label: string }): void {
        this.selectedSearchType = type;
        this.clearKeyword();
    }

    clearKeyword(): void {
        this.keyword = '';
        this.contactConfig = new ContactConfig();
        this.onKeywordChange(this.keyword);
    }

    onKeywordChange(keyword: string): void {
        this.clearConfigs();
        this.onSearchEmitter.emit({ searchType: this.selectedSearchType.key, keyword: keyword });
        this.getProfilePhoto('nilseri@ymail.com.tr');
    }

    addContact(event: any): void { // add contact to list with index and remove from all other lists
        const index = event.index;
        const contact = event.contact;
        this.addContactToRoleList(index, contact);
    }

    addContactToRoleList(index: number, contact: any) {
        let tempAttendees: ContactByRole[] = JSON.parse(JSON.stringify(this.attendees));

        const isEmailExists = tempAttendees[index].list.map(x => x.email).indexOf(contact.email) === -1;
        const isOtherEmailExists = (contact.other_email || '').trim().length > 0 && tempAttendees[index].list.map(x => x.email).indexOf(contact.other_email) === -1;

        if (isEmailExists || isOtherEmailExists) {
            tempAttendees = this.removeFromOtherRole(tempAttendees, index, contact);
            const attendee: ContactSuggestion = new ContactSuggestion('contact', isEmailExists ? contact.email : contact.other_email);
            tempAttendees[index].list.push(attendee);
            this.attendees = tempAttendees;
        }
    }

    removeFromOtherRole(attendees: ContactByRole[], indexOfList: number, contact: any): ContactByRole[] {
        // remove contact from all lists except the list with given index number
        attendees.forEach((element, i) => {
            if (i !== indexOfList) {
                let indexOfMail = element.list.map(x => x.email).indexOf(contact.email);
                if (indexOfMail === -1) {
                    indexOfMail = element.list.map(x => x.email).indexOf(contact.other_email);
                }
                if (indexOfMail !== -1) {
                    element.list.splice(indexOfMail, 1);
                }
            }
        });

        return attendees;
    }

    cancel(): void {
        this.bsModalRef.hide();
    }

    save(): void {
        // TODO: NilS
        this.onSaveEmitter.emit(true);
        this.cancel();
    }

    onScrollDown() {
        this.contactConfig.setOffset(this.contactConfig.offset + 10);
        this.contactConfig.setPage(this.contactConfig.page + 1);
        this.onSearchEmitter.emit({ searchType: this.selectedSearchType.key, keyword: this.keyword });
    }

    getProfilePhoto(email: string): void {
        this.onGetProfilePhotoEmitter.emit(email);
    }
}
