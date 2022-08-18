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
    this.autoCompleteItems = [
      { 'name': 'Yağız Öztürk', 'email': 'yagiz1@yposta.net' },
      { 'name': 'Damla Özdemir', 'email': 'yagiz2@yposta.net' },
      { 'name': 'Michael Jordan', 'email': 'yagiz3@yposta.net' },
      { 'name': 'Che Guevera', 'email': 'yagiz4@yposta.net' },
      { 'name': 'Osman Hamdi', 'email': 'yagiz5@yposta.net' },
      { 'name': 'Büyük Atatürk', 'email': 'yagiz6@yposta.net' }];
  }
}
