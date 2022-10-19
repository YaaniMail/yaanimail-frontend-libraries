
export class AddContactItem {
    type: "contact" | "label";
    email?: string;
    fullname: string;
    firstname?: string;
    other_email?: string;
    count?: number;
    countLabel?: string;

    constructor(type: ("contact" | "label"), fullname: string) {
        this.type = type;
        this.fullname = fullname;
    }
}
