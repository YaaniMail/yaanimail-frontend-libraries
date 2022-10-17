export class ContactSuggestion {
    id!: number;
    type: string;
    email!: string;
    name: string;
    emails!: string;
    role!: string;
    display!: string;
    displayValue!: string;
    value!: string;
    count!: number;
    rsvp!: number;
    valid!: boolean;
    isGroup!: any;

    constructor(type: string, name: string) {
        this.type = type;
        this.name = name;
    }
}
