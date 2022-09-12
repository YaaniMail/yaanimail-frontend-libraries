import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { AutoComplete } from '../model/autoComplete';

@Component({
  selector: 'ngym-tag-input-autocomplete',
  templateUrl: './tag-input-autocomplete.component.html',
  styleUrls: ['./tag-input-autocomplete.component.scss']
})
export class TagInputAutocompleteComponent {
  dropDownSelectionIndex: number = 0;
  @Input() autoCompleteItems!: AutoComplete[];
  @Output() onSelectEmitter = new EventEmitter<AutoComplete>();
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowDown' && this.autoCompleteItems.length > 0 && this.dropDownSelectionIndex <= this.autoCompleteItems.length) {
      this.dropDownSelectionIndex++;
    } else if (event.key === 'ArrowUp' && this.autoCompleteItems.length > 0 && this.dropDownSelectionIndex > 0) {
      this.dropDownSelectionIndex--;
    } else if (event.key === 'Enter' && this.autoCompleteItems.length > 0 && this.dropDownSelectionIndex <= this.autoCompleteItems.length) {
      this.onSelectItem(this.autoCompleteItems[this.dropDownSelectionIndex]);
    }
  }

  constructor() { }

  /**
   * Letting tag-input component know which item is selected from autocomplete
   */
  onSelectItem(item: AutoComplete): void {
    this.onSelectEmitter.emit(item);
  }
}
