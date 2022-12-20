import { HttpHeaders } from "@angular/common/http";

export interface ContactConfig {
    apiUrl: string;
    headers: HttpHeaders;
    pageHeader: string;
    namePlaceholder: string;
    surnamePlaceholder: string;
    companyPlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    tagArray: string[];
    phoneTypeArray: string[];
    addressTypeArray: string[];
    countryPlaceholder: string;
    cityPlaceholder: string;
    postalCodePlaceholder: string;
    statePlaceholder: string;
    streetPlaceholder: string;
    notePlaceholder: string;
    addNoteButtonText: string;
    cancelButtonText: string;
    saveButtonText: string;
    jobtitlePlaceholder: string;
    addEmailButtonText: string;
    addAddressButtonText: string;
    addPhoneButtonText: string;
}