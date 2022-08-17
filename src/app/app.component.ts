import { Component } from '@angular/core';
import { AutoComplete } from 'projects/ngym-chips/src/lib/model/autoComplete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yaanimail-frontend-libraries';
  pattern: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  autoCompleteItems!: AutoComplete[];
  i: number = 0;

  constructor() {

  }

  changeAutoCompleteItems(event: any): void {
    this.autoCompleteItems = [{ 'initials': 'DE', 'name': 'yağız', 'email': 'yagiz1@yposta.net' }, { 'initials': 'DE', 'name': 'yağız', 'email': 'yagiz2@yposta.net' }, { 'initials': 'DE', 'name': 'yağız', 'email': 'yagiz3@yposta.net' }, { 'initials': 'DE', 'name': 'yağız', 'email': 'yagiz4@yposta.net' }, { 'initials': 'DE', 'name': 'yağız', 'email': 'yagiz5@yposta.net' }, { 'initials': 'DE', 'name': 'yağız', 'email': 'yagiz6@yposta.net' }];
    this.autoCompleteItems.push({ 'initials': 'RE' + this.i, 'name': 'yağız', 'email': 'yagiz@yposta.net' });
  }
}
