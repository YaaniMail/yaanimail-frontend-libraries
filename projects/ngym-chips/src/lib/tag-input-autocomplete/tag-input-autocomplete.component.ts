import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutoComplete } from '../model/autoComplete';

@Component({
  selector: 'ngym-tag-input-autocomplete',
  templateUrl: './tag-input-autocomplete.component.html',
  styleUrls: ['./tag-input-autocomplete.component.scss']
})
export class TagInputAutocompleteComponent implements OnInit {
  @Input() autoCompleteItems!: AutoComplete[];
  @Output() onSelectEmitter = new EventEmitter<AutoComplete>();

  constructor() { }

  ngOnInit(): void {

  }

  /**
   * Letting tag-input component know which item is selected from autocomplete
   */
  onSelectItem(item: AutoComplete): void {
    this.onSelectEmitter.emit(item);
  }

}
