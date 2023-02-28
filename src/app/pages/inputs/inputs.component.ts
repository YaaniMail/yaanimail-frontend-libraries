import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  inputGroupValue!: string;
  inputTextValue!: string;
  inputPasswordValue!: string;

  constructor() { }

  ngOnInit(): void {
  }

  groupButtonRemove(): void {

  }

  assignTags(e: any) {

  }

}
