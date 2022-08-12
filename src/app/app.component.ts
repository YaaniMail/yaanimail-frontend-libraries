import { Component } from '@angular/core';
import { AutoComplete } from 'projects/ngym-chips/src/lib/model/autoComplete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yaani-email-libraries';
  pattern: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  autoCompleteItems!: AutoComplete[];
  i: number = 0;

  constructor() {

  }

  changeAutoCompleteItems(event: any): void {
    this.autoCompleteItems = [{ 'initials': 'DE', 'name': 'yağız', 'email': 'yagiz@yposta.net' }, { 'initials': 'DE', 'name': 'yağız', 'email': 'yagiz@yposta.net' }, { 'initials': 'DE', 'name': 'yağız', 'email': 'yagiz@yposta.net' }, { 'initials': 'DE', 'name': 'yağız', 'email': 'yagiz@yposta.net' }, { 'initials': 'DE', 'name': 'yağız', 'email': 'yagiz@yposta.net' }, { 'initials': 'DE', 'name': 'yağız', 'email': 'yagiz@yposta.net' }];
    this.autoCompleteItems.push({ 'initials': 'RE' + this.i, 'name': 'yağız', 'email': 'yagiz@yposta.net' });
  }
}
