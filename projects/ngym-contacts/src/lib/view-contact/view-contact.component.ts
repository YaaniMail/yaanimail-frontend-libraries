import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  config!: ContactConfig;
  @Output() onGetErrorEmitter = new EventEmitter<string>();

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    this.contactService.getContact(this.config.apiUrl, this.config.headers).subscribe(
      data => {

      },
      error => {
        this.onGetErrorEmitter.emit(error.error.message);

      }
    );
  }

}
