import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoComplete } from 'projects/ngym-chips/src/lib/model/autoComplete';
import { Tag } from 'projects/ngym-chips/src/lib/model/tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  inputGroupValue!: string;
  inputTextValue!: string;
  inputPasswordValue!: string;
  title = 'yaanimail-frontend-libraries';
  pattern: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  autoCompleteItems!: AutoComplete[];
  zone1Tags!: Tag[];
  testBind!: Tag[];
  toTags: Tag[] = [];
  ccTags: Tag[] = [];
  bccTags: Tag[] = [];
  id: number = 0;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      password: ['', Validators.required],
      type: ['', [Validators.required]],
    });
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



  finalize(): void {
    console.log(this.testBind);
  }

  logInputClick(): void {
    console.log(this.inputGroupValue);
  }

  submitForm(): void {
    console.log(this.form.value);
  }

  onSelectChange(e: any): void {
    console.log(e);
  }

  onAdd(tag: Tag): void {
    tag['isGroup'] = true; // webservis
    this.testBind.push(tag);
  }

  onTagAdd(tag: Tag) {

  }

  logTags(): void {
    console.log(this.toTags);
    console.log(this.ccTags);
    console.log(this.bccTags);
  }

  removeTag(_tag: Tag): void {
    this.toTags = this.toTags.filter(tag => tag.id !== _tag.id);
  }
}
