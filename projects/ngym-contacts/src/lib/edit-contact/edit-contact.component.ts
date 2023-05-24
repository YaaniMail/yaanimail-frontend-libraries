import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateContactConfig } from '../model/config';
import { ContactService } from '../service/contact.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'ngym-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent {
  emails: string[] = [];
  showNotes: boolean = false;
  form: FormGroup = new FormGroup({
    firstname:  new FormControl(null , [Validators.required]),
    lastname: new FormControl(),
    fullname: new FormControl(),
    company: new FormControl(),
    jobtitle: new FormControl(),
    email: this.fb.array([]),
    phone: this.fb.array([]),
    addresses: this.fb.array([]),
    notes: new FormControl()
  });
  contactData!: Contact;

  @Input() set contact(data:Contact) {
    if (data){
      this.contactData = data;
      this.updateForm(data);
      this.appendEmails();
      this.appendPhones();
      this.appendAddresses();
      this.controlNoteInput();
    }
  }
  @Input() config!: CreateContactConfig;
  @Input() alternativeAction!: TemplateRef<any>;
  @Output() onUpdateEmitter = new EventEmitter<any>();
  @Output() onCancelEmitter = new EventEmitter();
  @Output() onUpdateErrorEmitter = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) { }

  updateForm(contact:Contact): void {
    this.form.patchValue({
      firstname: contact.firstname,
      lastname: contact.lastname,
      fullname: `${contact.firstname} ${contact.fullname}`,
      company: contact.company,
      jobtitle: contact.jobtitle,
      email: [],
      phone: [],
      addresses: [],
      notes: contact.notes
    });
  }

  // Getters
  get emailsArray(): FormArray {
    return this.form.get('email') as FormArray;
  }

  get addressesArray(): FormArray {
    return this.form.get('addresses') as FormArray;
  }

  get phonesArray(): FormArray {
    return this.form.get('phone') as FormArray;
  }

  appendEmails(): void {
    for (let i = 0; i < this.contactData.email.length; i++) {
      this.emails.push();
      this.emailsArray.push(this.fb.control(this.contactData.email[i]));
    }

    // If there is no email, append one by default
    if (this.emailsArray.length === 0) {
      this.addEmail();
    }
  }

  appendPhones(): void {
    for (let i = 0; i < this.contactData.phone.length; i++) {
      this.phonesArray.push(this.fb.group({
        type: this.contactData.phone[i].type,
        data: this.contactData.phone[i].data,
      }));
    }
  }

  appendAddresses(): void {
    for (let i = 0; i < this.contactData.addresses.length; i++) {
      this.addressesArray.push(this.fb.group({
        type: this.contactData.addresses[i].type,
        address: this.fb.group({
          country: this.contactData.addresses[i].data.country,
          city: this.contactData.addresses[i].data.city,
          postalcode: this.contactData.addresses[i].data.postalcode,
          state: this.contactData.addresses[i].data.state,
          street: this.contactData.addresses[i].data.street
        })
      }));
    }
  }

  updateContact(): void {
    this.assignFullname();
    this.contactService.updateContact(this.config.apiUrl, this.form.value, this.config.headers).subscribe(
      data => {
        let contactData = { id: '', firstname: '', lastname: '', fullname: '', email: [] };
        contactData.id = data.id;
        contactData.firstname = this.form.value.firstname;
        contactData.lastname = this.form.value.lastname;
        contactData.fullname = this.form.value.fullname;
        contactData.email = this.form.value.email;
        this.onUpdateEmitter.emit(contactData);
      },
      error => {
        this.onUpdateErrorEmitter.emit(error.error.message);
      }
    );
  }

  assignFullname(): void {
    this.form.value.fullname = this.form.value.firstname + ' ' + this.form.value.lastname;
  }

  addEmail(value?: string): void {
    const emails = this.emailsArray;
    if (!emails.value.includes(value)) {
      emails.push(this.fb.control(value));
    }
  }

  addAddress(): void {
    this.addressesArray.push(this.fb.group({
      type: this.config.addressTypeArray[0].value,
      address: this.fb.group({
        type: '',
        country: '',
        city: '',
        postalcode: '',
        state: '',
        street: ''
      })
    }));
  }

  addPhoneNumber(): void {
    this.phonesArray.push(this.fb.group({
      type: this.config.phoneTypeArray[0].value,
      data: '',
    }));
  }

  deleteEmail(i: number): void {
    this.emailsArray.removeAt(i);
  }

  deleteAddress(i: number): void {
    this.addressesArray.removeAt(i);
  }

  deletePhoneNumber(i: number): void {
    this.phonesArray.removeAt(i);
  }

  deleteNotes(): void {
    this.contactData.notes = '';
  }

  controlNoteInput(): void {
    if (this.contactData.notes.length === 0) {
      this.showNotes = false;
    } else {
      this.showNotes = true;
    }
  }

  isValidEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = re.test(String(email).toLowerCase());
    if (!valid) {
      return false;
    }
    return true;
  }

  onCancel(): void {
    this.onCancelEmitter.emit();
  }
}
