import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ngym-add-contact-row',
    templateUrl: './add-contact-row.component.html'
})
export class AddContactRowComponent {
    @Input() contactCountLabel: string = '';
    @Input() contact: any;
    @Input() roles: Array<string> = [];
    @Output() addContactEvent = new EventEmitter<{ index: number, contact: any }>();

    constructor() { }

    addContactToList(index: number, contact: any) {
        this.addContactEvent.emit({ index, contact });
    }
}