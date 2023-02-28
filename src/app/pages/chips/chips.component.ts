import { Component, OnInit } from '@angular/core';
import { AutoComplete } from 'projects/ngym-chips/src/lib/model/autoComplete';
import { Tag } from 'projects/ngym-chips/src/lib/model/tag';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  toTags: Tag[] = [];
  ccTags: Tag[] = [];
  bccTags: Tag[] = [];
  autoCompleteItems!: AutoComplete[];
  pattern: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  customTags: Tag[] = [];

  constructor(private webService: WebService) {

  }

  ngOnInit(): void {
  }

  changeAutoCompleteItems(event: any): void {
    this.webService.getMockData().subscribe(
      data => {
        this.autoCompleteItems = data;
      }
    );
  }

  removeTag(_tag: Tag): void {
    this.toTags = this.toTags.filter(tag => tag.id !== _tag.id);
  }


  onTagAdd(tag: Tag) {
    // this.autoCompleteItems = [];
  }

  onSelect(e: any): void {
    console.log(e);
  }

  logTags(): void {
    console.log(this.toTags);
    console.log(this.ccTags);
    console.log(this.bccTags);
  }

}
