import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactConfig } from '../model/config';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'ngym-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {
  contact!: Contact;
  @Input() contactConfig!: ContactConfig;
  @Output() onGetErrorEmitter = new EventEmitter<string>();

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    this.contactService.getContact(this.contactConfig.apiUrl, this.contactConfig.headers).subscribe(
      data => {
        this.contact = data;
      },
      error => {
        this.onGetErrorEmitter.emit(error.error.message);

      }
    );
  }

}
