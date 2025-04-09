import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { Contact } from '../model/contact';
import { ViewContactConfig } from '../model/config';

@Component({
  selector: 'ngym-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss'],
})
export class ViewContactComponent {
  @Input() contact!: Contact;
  @Input() config!: ViewContactConfig;
  @Input() profileTemplate!: TemplateRef<any>;
  @Output() onEditEmitter = new EventEmitter();
  @Output() onComposeEmitter = new EventEmitter<string>();
  @Output() addFavoriteEmitter = new EventEmitter();
  @Output() removeFavoriteEmitter = new EventEmitter();
  constructor() {}

  onEdit(): void {
    this.onEditEmitter.emit();
  }

  onCompose(email: string): void {
    this.onComposeEmitter.emit(email);
  }

  addFavorite(): void {
    this.addFavoriteEmitter.emit();
  }

  removeFavorite(): void {
    this.removeFavoriteEmitter.emit();
  }
}
