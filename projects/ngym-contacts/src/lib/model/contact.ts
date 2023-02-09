export interface Contact {
    addresses: {
        home: string;
        other: string;
        work: string;
    };
    company: string;
    create_date: string;
    fileas: string;
    firstname: string;
    fullname: string;
    id: string;
    jobtitle: string;
    lastname: string;
    notes: string;
    email: string[];
    phone: {
        home: string[];
        mobile: string[];
        other: string[];
        work: string[];
    };
    tag_names?: string[];
    checked?: boolean;
}