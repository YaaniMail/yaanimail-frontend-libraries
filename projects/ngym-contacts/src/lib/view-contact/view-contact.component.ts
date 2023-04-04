import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../model/contact';
import { ViewContactConfig } from '../model/config';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'ngym-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {
  contact!: Contact;
  @Input() config!: ViewContactConfig;
  @Output() onGetErrorEmitter = new EventEmitter<string>();
  @Output() onEditEmitter = new EventEmitter();

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    this.contactService.getContact(this.config.apiUrl, this.config.headers).subscribe(
      data => {
        this.contact = data;
      },
      error => {
        this.onGetErrorEmitter.emit(error.error.message);
      }
    );
  }

  onEdit(): void {
    this.onEditEmitter.emit();
  }

}
