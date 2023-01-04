import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactConfig } from 'ngym-contacts';
import { Logo } from 'ngym-prelogin-header';
import { AutoComplete } from 'projects/ngym-chips/src/lib/model/autoComplete';
import { Tag } from 'projects/ngym-chips/src/lib/model/tag';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  form!: FormGroup;
  title = 'yaanimail-frontend-libraries';

  autoCompleteItems!: AutoComplete[];


  logo!: Logo;


  constructor(private fb: FormBuilder, private webService: WebService) {

  }

  ngOnInit(): void {
    this.logo = new Logo('../assets/yaanimail2x-enterprise.png');


  }















  assignTags(e: any): void {
    console.log(e);
  }

}
