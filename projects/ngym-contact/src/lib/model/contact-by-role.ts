import { ContactSuggestion } from "./contact-suggestion";

export class ContactByRole {
    name!: string;
    label!: string;
    title?: string;
    list: ContactSuggestion[] = [];

    constructor(name: string, label: string, list: ContactSuggestion[]) {
        this.name = name;
        this.label = label;
        this.list = list;
    }
}
