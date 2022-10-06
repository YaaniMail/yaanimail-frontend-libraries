export class ContactSuggestion {
    type: string;
    email: string = '';
    name: string;
    emails: string = '';
    role: string = '';
    display: string = '';
    displayValue: string = '';
    value: string = '';
    count: number = 0;
    rsvp: number = 0;
    valid: boolean = false;
    isGroup: any;

    constructor(type: string, name: string) {
        this.type = type;
        this.name = name;
    }
}
