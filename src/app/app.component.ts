import { Component } from '@angular/core';
import { AutoComplete } from 'projects/ngym-chips/src/lib/model/autoComplete';
import { Tag } from 'projects/ngym-chips/src/lib/model/tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yaanimail-frontend-libraries';
  pattern: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  autoCompleteItems!: AutoComplete[];
  zone1Tags!: Tag[];

  constructor() {

  }

  changeAutoCompleteItems(event: any): void {
    this.autoCompleteItems = [
      { 'name': 'Yağız Öztürk', 'email': 'yagiz@yposta.net' },
      { 'name': 'Damla Özdemir', 'email': 'damla@yposta.net' },
      { 'name': 'Michael Jordan', 'email': 'jordan@yposta.net' },
      { 'name': 'Che Guevera', 'email': 'cheguewvera@yposta.net' },
      { 'name': 'Osman Hamdi', 'email': 'osmanhamdi@yposta.net' },
      { 'name': 'Büyük Atatürk', 'email': 'ataturk@yposta.net' }];
  }

  getTags(tags: Tag[], dragZone: string): void {
    console.log(tags);
    console.log(dragZone);
    this.zone1Tags = tags;
  }

  logFinal(): void {
    console.log(this.zone1Tags);
  }
}
