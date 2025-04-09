import { HttpHeaders } from '@angular/common/http';
import { SelectInputType } from './select-input-type';

export interface CreateContactConfig {
  apiUrl: string;
  headers: HttpHeaders;
  pageHeader: string;
  namePlaceholder: string;
  surnamePlaceholder: string;
  companyPlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  tagPlaceholder: string;
  tagOptions: string[];
  phoneTypeArray: SelectInputType[];
  addressTypeArray: SelectInputType[];
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
  addTagButtonText: string;
  addAddressButtonText: string;
  addPhoneButtonText: string;
}

export interface ViewContactConfig {
  pageHeader: string;
  editButtonText: string;
  sendEmailText: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  addressPlaceholder: string;
  managerPlaceholder: string;
  registerNoPlaceholder: string;
  notesPlaceholder: string;
  otherTypePlaceholder: string;
  homeTypePlaceholder: string;
  phoneTypePlaceholder: string;
  mobileTypePlaceholder: string;
  workTypePlaceholder: string;
  addFavoriteButtonText: string;
  removeFavoriteButtonText: string;
  favoriteContactText: string;
}
