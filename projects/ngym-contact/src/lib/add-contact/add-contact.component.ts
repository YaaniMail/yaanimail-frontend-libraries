import { Component, EventEmitter, forwardRef, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ContactsAccessor } from '../accessor/contactsAccessor';
import { ContactByRole } from '../model/contact-by-role';
import { ContactConfig } from '../model/contact-config';
import { ContactSuggestion } from '../model/contact-suggestion';

@Component({
    selector: 'ngym-add-contact',
    templateUrl: './add-contact.component.html',
    styleUrls: ['./add-contact.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AddContactComponent),
        multi: true
    }]
})
export class AddContactComponent extends ContactsAccessor {
    contacts: { email: string, fullname: string, firstname: string, other_email: string }[] = [];
    roles: string[] = [];
    keyword: string = '';
    contactSearchType: { key: string, label: string } = {
        key: '',
        label: ''
    };
    attendees: ContactByRole[] = [];
    contactConfig: ContactConfig = new ContactConfig();
    @Input() isLoading!: boolean;
    @Input() addAttendeeTitle: string = '';
    @Input() addContactSearchPlaceholder: string = '';
    @Input() noResultLabel: string = '';
    @Input() searchForListingLabel: string = '';
    @Input() buttonCancelLabel: string = '';
    @Input() addSenderLabel: string = '';
    @Input() contactCountLabel: string = '';
    @Input() contactSearchTypeList: { key: string, label: string }[] = [];
    // TODO: NilS
    @Output() onSelectEmitter = new EventEmitter<Boolean>();
    @Output() onSearchEmitter = new EventEmitter<String>();
    @Output() onSaveEmitter = new EventEmitter<Boolean>();
    @Output() onCancelEmitter = new EventEmitter<Boolean>();
    @ViewChild('searchIcon') searchIconTemplate!: TemplateRef<any>;

    constructor() {
        super();
    }

    setSearchType(type: { key: string, label: string }): void {
        this.contactSearchType = type;
        this.clearKeyword();
    }

    clearKeyword(): void {
        this.keyword = '';
        this.contactConfig = new ContactConfig();
        this.onKeywordChange(this.keyword);
    }

    onKeywordChange(keyword: string): void {
        this.clearConfigs();
        this.onSearchEmitter.emit(keyword);
    }

    clearConfigs() {
        this.contactConfig = new ContactConfig();
        this.contacts = [];
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
        this.onCancelEmitter.emit(true);
    }

    save(): void {
        this.onSaveEmitter.emit(true);
    }

    onScrollDown() {
        this.contactConfig.setOffset(this.contactConfig.offset + 10);
        this.contactConfig.setPage(this.contactConfig.page + 1);
        this.onSearchEmitter.emit(this.keyword);
    }
}
