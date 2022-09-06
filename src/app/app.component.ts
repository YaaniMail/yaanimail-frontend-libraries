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
      { 'name': 'Avedis Boyacı', 'email': 'avedis@yposta.net' },
      { 'name': 'Yunus Emre Bora', 'email': 'yunus@yposta.net' },
      { 'name': 'Sevcan Kaya', 'email': 'sevcan@yposta.net' },
      { 'name': 'İbrahim Karagöz', 'email': 'ibrahim@yposta.net' }];
  }

  getTags(tags: Tag[], dragZone: string): void {
    this.zone1Tags = tags;
  }

  logFinal(): void {
    console.log(this.zone1Tags);
  }
}
