import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Logo } from 'ngym-prelogin-header';
import { AutoComplete } from 'projects/ngym-chips/src/lib/model/autoComplete';
import { Tag } from 'projects/ngym-chips/src/lib/model/tag';
import { WebService } from './service/web.service';

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
  textAfterDrag: string = '';
  hoppa: boolean = true;
  title = 'yaanimail-frontend-libraries';
  pattern: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  autoCompleteItems!: AutoComplete[];
  toTags: Tag[] = [];
  ccTags: Tag[] = [];
  bccTags: Tag[] = [];
  customTags: Tag[] = [];
  logo!: Logo;

  constructor(private fb: FormBuilder, private webService: WebService) {

  }

  ngOnInit(): void {
    this.createForm();
    this.logo = new Logo('../assets/yaanimail2x-enterprise.png')
  }

  createForm(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      password: ['', Validators.required],
      type: ['', [Validators.required]],
    });
  }

  changeAutoCompleteItems(event: any): void {
    this.webService.getMockData().subscribe(
      data => {
        this.autoCompleteItems = data;
      }
    );
  }

  onTagAdd(tag: Tag) {
    // this.autoCompleteItems = [];
  }

  removeTag(_tag: Tag): void {
    this.toTags = this.toTags.filter(tag => tag.id !== _tag.id);
  }

  logTags(): void {
    console.log(this.toTags);
    console.log(this.ccTags);
    console.log(this.bccTags);
  }

  submitForm(): void {
    console.log(this.form.value);
  }

  /** Dropdown select change */
  onSelectChange(e: any): void {
    console.log(e);
  }

  groupButtonRemove(): void {

  }

  allowDrop(ev: any) {
    ev.preventDefault();
  }

  drag(ev: any) {
    this.textAfterDrag = 'dragging';
  }

  drop(ev: any) {
    ev.preventDefault();
    this.textAfterDrag = 'BJK';
  }

}
