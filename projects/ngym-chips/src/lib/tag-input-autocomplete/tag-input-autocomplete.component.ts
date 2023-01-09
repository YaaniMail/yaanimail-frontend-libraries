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
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowDown' && this.autoCompleteItems.length > 0 && this.dropDownSelectionIndex <= this.autoCompleteItems.length) {
      this.dropDownSelectionIndex++;
    } else if (event.key === 'ArrowUp' && this.autoCompleteItems.length > 0 && this.dropDownSelectionIndex > 0) {
      this.dropDownSelectionIndex--;
    }
  }

  constructor() { }

  /**
   * Letting tag-input component know which item is selected from autocomplete
   */
  onSelectItem(item: AutoComplete): void {
    this.onSelectEmitter.emit(item);
    this.dropDownSelectionIndex = -1;
  }

  /**
   * Parent component is responsible for enter event. Because it is input elements event.
   * So enter event communicates with child, gets the index in dropdown element and selects it.
   */
  onEnterSelectItem(): void {
    this.onSelectItem(this.autoCompleteItems[this.dropDownSelectionIndex]);
  }
}
