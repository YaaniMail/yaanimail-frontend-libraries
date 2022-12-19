import { Component, EventEmitter, HostListener, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { AutoComplete } from '../model/autoComplete';

@Component({
  selector: 'ngym-tag-input-autocomplete',
  templateUrl: './tag-input-autocomplete.component.html',
  styleUrls: ['./tag-input-autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagInputAutocompleteComponent {
  dropDownSelectionIndex: number = -1;
  @Input() autoCompleteItems!: AutoComplete[];
  @Input() autoCompleteTemplate!: TemplateRef<any>;
  @Input() isLoading!: boolean;
  @Output() onSelectEmitter = new EventEmitter<AutoComplete>();

  constructor() { }

  /**
   * Letting tag-input component know which item is selected from autocomplete
   */
  onSelectItem(item: AutoComplete): void {
    this.onSelectEmitter.emit(item);
  }
}
