import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'lib-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() contact!: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
