import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Logo } from 'ngym-prelogin-header';
import { AutoComplete } from 'projects/ngym-chips/src/lib/model/autoComplete';
import { Tag } from 'projects/ngym-chips/src/lib/model/tag';
import { WebService } from './service/web.service';
import { AddContactComponent } from 'projects/ngym-contact/src/lib/add-contact/add-contact.component';
import { AddContactItem } from 'projects/ngym-contact/src/lib/model/add-contact-item';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  addContactModalRef!: BsModalRef;
  inputGroupValue!: string;
  inputTextValue!: string;
  inputPasswordValue!: string;
  title = 'yaanimail-frontend-libraries';
  pattern: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  autoCompleteItems!: AutoComplete[];
  toTags: Tag[] = [];
  ccTags: Tag[] = [];
  bccTags: Tag[] = [];
  customTags: Tag[] = [];
  logo!: Logo;
  contacts: AddContactItem[] = [];

  constructor(
    private fb: FormBuilder,
    private webService: WebService,
    private modalService: BsModalService
  ) {

  }

  ngOnInit(): void {
    this.createForm();
    this.logo = new Logo('../assets/yaanimail2x-enterprise.png', '/home')
  }

  createForm(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      password: ['', Validators.required],
      type: ['', [Validators.required]],
    });
  }

  changeAutoCompleteItems(event: any): void {
    this.webService.getMockData().subscribe(
      data => {
        this.autoCompleteItems = data;
      }
    );

  }

  onTagAdd(tag: Tag) {
    // this.autoCompleteItems = [];
  }

  removeTag(_tag: Tag): void {
    this.toTags = this.toTags.filter(tag => tag.id !== _tag.id);
  }

  logTags(): void {
    console.log(this.toTags);
    console.log(this.ccTags);
    console.log(this.bccTags);
  }

  groupButtonRemove(): void {

  }

  submitForm(): void {
    console.log(this.form.value);
  }

  /** Dropdown select change */
  onSelectChange(e: any): void {
    console.log(e);
  }

  openAddContactModal(): void {
    const initialState = {
      contacts: this.contacts,
      addAttendeeTitle: 'Add Attendee',
      addContactSearchPlaceholder: 'Search to listing contacts',
      noResultLabel: 'No Results Found.',
      searchForListingLabel: 'Search to listing contacts',
      buttonCancelLabel: 'Cancel',
      addSenderLabel: 'Add',
      contactCountLabel: 'x adet bulundu',
      contactSearchTypeList: [{ key: 'GLOBAL_ADDRESS_LIST', label: 'Global Address List' }, { key: 'MY_LABELS', label: 'My Labels' }]
    };
    this.addContactModalRef = this.modalService.show(AddContactComponent, { class: 'modal-dialog-centered add-attendee-modal p-0', initialState, ignoreBackdropClick: true });

    const onHideSubscribe = this.modalService.onHide.subscribe((e) => {
      console.log('closed');
      onHideSubscribe.unsubscribe();
    });

    this.addContactModalRef.content.onSelectEmitter.subscribe(() => this.addContactOnSelect());
    this.addContactModalRef.content.onSearchEmitter.subscribe(() => this.addContactOnSearch());
    this.addContactModalRef.content.onSelectEmitter.subscribe(() => this.addContactOnSave());
    this.addContactModalRef.content.onSelectEmitter.subscribe(() => this.addContactOnCancel());
  }

  addContactOnSelect(): void {
    console.log(this.contacts);
  }

  addContactOnSearch(): void {
    console.log(this.contacts);
  }

  addContactOnSave(): void {
    console.log(this.contacts);
  }

  addContactOnCancel(): void {
    console.log(this.contacts);
  }

}
