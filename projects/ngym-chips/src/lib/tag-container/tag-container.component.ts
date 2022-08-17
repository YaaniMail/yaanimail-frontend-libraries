import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { AutoComplete } from '../model/autoComplete';
import { Tag } from '../model/tag';
import { TagInputComponent } from '../tag-input/tag-input.component';

@Component({
  selector: 'ngym-tag-container',
  templateUrl: './tag-container.component.html',
  styleUrls: ['./tag-container.component.scss']
})
export class TagContainerComponent {
  selectedTagId: number = -1;
  startingTagIndex!: number;
  droppingTagIndex!: number;
  draggingTag!: Tag;
  tags: Tag[] = [];
  @Input() editAllowed!: boolean;
  @Input() duplicateAllowed!: boolean;
  @Input() pattern!: RegExp;
  @Input() autoCompleteItems!: AutoComplete[];
  @Output() onSelectEmitter = new EventEmitter<Tag>();
  @Output() onKeyPressedEmitter = new EventEmitter<KeyboardEvent>();
  @ViewChild(TagInputComponent) tagInputComponent!: TagInputComponent;
  @HostListener('document:keydown', ['$event'])
  // Deleting a selected tag if a keyboard event of Bacspace is clicked globally.
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Backspace' && this.selectedTagId !== -1) {
      this.removeTag(this.selectedTagId);
      this.selectedTagId = -1;
    }
  }

  constructor() { }

  /**
   * Add a new tag to container. Showing every tag on screen by ngFor.
   */
  addTag(tag: Tag): void {
    const isDuplicate = this.checkDuplicate(tag.value);

    // If there is duplicate value but duplicate is NOT allowed
    if (!this.duplicateAllowed && isDuplicate) {
      return;
    }

    this.tags.push(tag);
  }

  /**
   * Remove a new tag from container.
   */
  removeTag(id: number): void {
    this.tags = this.tags.filter(tag => tag.id !== id);
  }

  /**
   * Parent communication for which tag is selected
   */
  selectTag(tag: Tag): void {
    this.selectedTagId = tag.id;
    this.onSelectEmitter.emit(tag);
  }

  /**
   * Remove tag from list and edit in tag input component for a new tag
   */
  assignTagToEdit(tag: Tag): void {
    this.removeTag(tag.id);
    this.tagInputComponent.changeInputToEdit(tag);
  }

  /**
   * Letting know an out project that a letter is typed.
   * So that out project will send auto complete items.
   */
  getAutoCompleteItems(event: KeyboardEvent): void {
    this.onKeyPressedEmitter.emit(event);
  }

  /**
   * Adding tag from selected auto complete item
   */
  selectAutoCompleteItem(tag: Tag): void {
    this.addTag(tag);
  }

  /**
   * Duplicate tag values are configurative. Returns if duplicate value is in the @tags array or not
   */
  checkDuplicate(value: string): boolean {
    const _tags = this.tags.map(function (t) { return t.value });
    const isDuplicate = _tags.some(t => t === value);

    return isDuplicate;
  }

  /**
   * Starting event of dragging single tag
   */
  onDragStart(event: DragEvent, tag: Tag, index: number): void {
    event.stopPropagation();
    this.draggingTag = tag;
    this.startingTagIndex = index;
  }

  /**
   * Getting dragged over item and index to replace it
   */
  onDragOver(event: DragEvent, index: number): void {
    event.preventDefault();
    this.droppingTagIndex = index;
  }

  /**
   * Drag event finishes. Removing item first and then inserting it at desired index.
   */
  onDrop(event: DragEvent): void {
    if (this.startingTagIndex === this.droppingTagIndex) {
      return;
    }

    this.removeTag(this.draggingTag.id);
    this.tags.splice(this.droppingTagIndex, 0, this.draggingTag);
  }

}
