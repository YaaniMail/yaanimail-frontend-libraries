export interface Contact {
    addresses: [{
        type: string,
        data: {
            country: string;
            city: string;
            postalcode: string;
            state: string;
            street: string;
        }
    }];
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
    phone: [{
        type: string;
        data: string
    }];
    tag_names?: string[];
    checked?: boolean;
}