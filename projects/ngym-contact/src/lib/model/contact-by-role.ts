import { Tag } from "ngym-chips";

export class ContactByRole {
    name!: string;
    label!: string;
    title?: string;
    tags: Tag[] = [];

    constructor(name: string, label: string, tags: Tag[]) {
        this.name = name;
        this.label = label;
        this.tags = tags;
    }
}
