import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateContactConfig } from '../model/config';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'ngym-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  emails: string[] = [];
  tags: string[] = [];
  showNotes: boolean = false;
  form!: FormGroup;
  @Input() config!: CreateContactConfig;
  @Output() onAddEmitter = new EventEmitter<any>();
  @Output() onCancelEmitter = new EventEmitter();
  @Output() onAddErrorEmitter = new EventEmitter<string>();

  // TODO: DElete socket event

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.addEmail();
  }

  createForm(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: [''],
      fullname: [''],
      company: [''],
      jobtitle: [''],
      email: this.fb.array([]),
      phone: this.fb.array([]),
      addresses: this.fb.array([]),
      tag_names: this.fb.array([]),
      notes: ['']
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

  addContact(): void {
    this.assignFullname();
    this.form.value.tag_names = this.tags;
    this.contactService.createContact(this.config.apiUrl, this.form.value, this.config.headers).subscribe(
      data => {
        let contact = { id: '', firstname: '', lastname: '', fullname: '', email: [], tag_names: [] };
        contact.id = data.id;
        contact.firstname = this.form.value.firstname;
        contact.lastname = this.form.value.lastname;
        contact.fullname = this.form.value.fullname;
        contact.email = this.form.value.email;
        contact.tag_names = this.form.value.tag_names;
        this.onAddEmitter.emit(contact);
      },
      error => {
        this.onAddErrorEmitter.emit(error.error.message);
      }
    );
  }

  assignFullname(): void {
    this.form.value.fullname = this.form.value.firstname + ' ' + this.form.value.lastname;
  }

  addAddress(): void {
    this.addressesArray.push(this.fb.group({
      type: this.config.addressTypeArray[0].value,
      address: this.fb.group({
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
