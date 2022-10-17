export class AddContactItem {
    email!: string;
    fullname!: string;
    firstname!: string;
    other_email!: string;

    constructor(email: string, fullname: string, firstname: string, other_email: string) {
        this.email = email;
        this.fullname = fullname;
        this.firstname = firstname;
        this.other_email = other_email;
    }
}
