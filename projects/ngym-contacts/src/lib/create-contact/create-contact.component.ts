import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactConfig } from '../model/config';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'ngym-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  emails: string[] = [];
  showNotes: boolean = false;
  form!: FormGroup;
  @Input() contactConfig!: ContactConfig;
  @Input() labelTemplate!: TemplateRef<any>;
  @Output() onAddEmitter = new EventEmitter<number>();
  @Output() onAddErrorEmitter = new EventEmitter<string>();

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
      name: ['', Validators.required],
      surname: ['', Validators.required],
      company: [''],
      jobtitle: [''],
      notes: [''],
      email: this.fb.array([]),
      phone: this.fb.array([]),
      addresses: this.fb.array([])
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
      emails.push(this.fb.control(value, Validators.email));
    }
  }

  addContact(): void {
    this.contactService.createContact(this.contactConfig.apiUrl, this.form.value, this.contactConfig.headers).subscribe(
      data => {
        this.onAddEmitter.emit(data.id);
      },
      error => {
        this.onAddErrorEmitter.emit(error.error.message);
      }
    );
  }

  addAddress(): void {
    this.addressesArray.push(this.fb.group({
      type: '',
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
      type: '',
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

  controlNoteInput(note: string): void {
    if (note.length === 0) {
      this.showNotes = false;
    } else {
      this.showNotes = true;
    }
  }

  leaveOnHolder(): void {

  }

}
