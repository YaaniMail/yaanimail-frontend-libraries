import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoComplete } from 'projects/ngym-chips/src/lib/model/autoComplete';
import { Tag } from 'projects/ngym-chips/src/lib/model/tag';
import { WebService } from './service/web.service';
import { AddContactComponent } from 'projects/ngym-contact/src/lib/add-contact/add-contact.component';
import { ContactByRole } from 'projects/ngym-contact/src/lib/model/contact-by-role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup;
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
  contacts: ContactByRole[] = [];

  constructor(private fb: FormBuilder, private webService: WebService) {

  }

  ngOnInit(): void {
    this.createForm();
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
    /* this.modalService.show(AddContactComponent, { class: 'modal-dialog-centered add-attendee-modal p-0', {}, ignoreBackdropClick: true });
  const onHideSubscribe = this.modalService.onHide.subscribe((e) => {
    console.log('closed');
    onHideSubscribe.unsubscribe();
  });     */
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
