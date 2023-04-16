import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateContactConfig } from '../model/config';
import { ContactService } from '../service/contact.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'ngym-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  emails: string[] = [];
  tags: string[] = [];
  showNotes: boolean = false;
  form!: FormGroup;
  @Input() contact!: Contact;
  @Input() config!: CreateContactConfig;
  @Output() onUpdateEmitter = new EventEmitter<any>();
  @Output() onCancelEmitter = new EventEmitter();
  @Output() onUpdateErrorEmitter = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.appendPhones();
    this.appendAddresses();
  }

  createForm(): void {
    this.form = this.fb.group({
      firstname: [this.contact.firstname, Validators.required],
      lastname: [this.contact.lastname],
      fullname: [this.contact.firstname + ' ' + this.contact.fullname],
      company: [this.contact.company],
      jobtitle: [this.contact.jobtitle],
      email: this.fb.array(this.contact.email),
      phone: this.fb.array([]),
      addresses: this.fb.array([]),
      notes: [this.contact.notes]
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

  addEmail(value?: string): void {
    const emails = this.emailsArray;
    if (!emails.value.includes(value)) {
      emails.push(this.fb.control(value));
    }
  }

  appendPhones(): void {
    for (let i = 0; i < this.contact.phone.length; i++) {
      this.phonesArray.push(this.fb.group({
        type: this.contact.phone[i].type,
        data: this.contact.phone[i].data,
      }));
    }
  }

  appendAddresses(): void {
    for (let i = 0; i < this.contact.addresses.length; i++) {
      this.addressesArray.push(this.fb.group({
        type: this.contact.addresses[i].type,
        address: this.fb.group({
          country: this.contact.addresses[i].data.country,
          city: this.contact.addresses[i].data.city,
          postalcode: this.contact.addresses[i].data.postalcode,
          state: this.contact.addresses[i].data.state,
          street: this.contact.addresses[i].data.street
        })
      }));
    }
  }

  updateContact(): void {
    console.log(this.form.value);
    // this.assignFullname();
    // this.form.value.tag_names = this.tags;
    /*     this.contactService.updateContact(this.config.apiUrl, this.form.value, this.config.headers).subscribe(
          data => {
            let contact = { id: '', firstname: '', lastname: '', fullname: '', email: [] };
            contact.id = data.id;
            contact.firstname = this.form.value.firstname;
            contact.lastname = this.form.value.lastname;
            contact.fullname = this.form.value.fullname;
            contact.email = this.form.value.email;
            this.onUpdateEmitter.emit(contact);
          },
          error => {
            this.onUpdateErrorEmitter.emit(error.error.message);
          }
        ); */
  }

  assignFullname(): void {
    this.form.value.fullname = this.form.value.firstname + ' ' + this.form.value.lastname;
  }

  addAddress(): void {
    this.addressesArray.push(this.fb.group({
      type: this.config.addressTypeArray[0],
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
      type: this.config.phoneTypeArray[0],
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

  assignTags(tags: string[]): void {
    this.tags = tags;
  }

  controlNoteInput(note: string): void {
    if (note.length === 0) {
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
