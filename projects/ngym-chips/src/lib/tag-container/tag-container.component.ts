import { Component, EventEmitter, forwardRef, HostListener, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TagsAccessor } from '../accessor/tagAccessor';
import { AutoComplete } from '../model/autoComplete';
import { Tag } from '../model/tag';
import { DragDropProvider } from '../provider/dragDropProvider';
import { TagInputComponent } from '../tag-input/tag-input.component';

@Component({
  selector: 'ngym-tag-container',
  templateUrl: './tag-container.component.html',
  styleUrls: ['./tag-container.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagContainerComponent),
    multi: true
  }]
})
export class TagContainerComponent extends TagsAccessor {
  selectedTagId: number = -1;
  onDrag!: boolean;
  @Input() dragZone!: string;
  @Input() splitChars!: string[];
  @Input() editAllowed!: boolean;
  @Input() duplicateAllowed!: boolean;
  @Input() dragAllowed!: boolean;
  @Input() autoCompleteItems!: AutoComplete[];
  @Input() pattern!: RegExp;
  @Input() autoCompleteTemplate!: TemplateRef<any>;
  @Input() tagTemplate!: TemplateRef<any>;
  @Input() isLoading!: boolean;
  @Output() onSelectEmitter = new EventEmitter<Tag>();
  @Output() onKeyPressedEmitter = new EventEmitter<KeyboardEvent>();
  @Output() onPasteEmitter = new EventEmitter<Tag[]>();
  @Output() onAddEmitter = new EventEmitter<Tag>();
  @Output() onRemoveEmitter = new EventEmitter<Tag>();
  @ViewChild(TagInputComponent) tagInputComponent!: TagInputComponent;
  @HostListener('document:keydown', ['$event'])
  // Deleting a selected tag if a keyboard event of Bacspace is clicked globally.
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Backspace' && this.selectedTagId !== -1) {
      this.removeTag(this.selectedTagId);
      this.selectedTagId = -1; // so no new tag is selected
    }
  }

  constructor(
    public dragDropProvider: DragDropProvider
  ) {
    super();
  }

  /**
   * Add a new tag to container. Showing every tag on screen by ngFor.
   */
  addTag(tag: Tag): void {
    const isDuplicate = this.checkDuplicate(this.tagValues, tag.value);

    // If there is duplicate value but duplicate is NOT allowed
    if (!this.duplicateAllowed && isDuplicate) {
      return;
    }
    this.tagValues.push(tag)
    this.onAddEmitter.emit(tag);
  }

  /**
   * Check duplicate in receving dragZone
   * Splice to receving dragZone with dragProvider starting and dropping index.
   */
  addTagAfterDragDrop(): void {
    const isDuplicate = this.checkDuplicate(this.dragDropProvider.receiverComponent.tagValues, this.dragDropProvider.draggingTag.value);

    // If there is duplicate value but duplicate is NOT allowed
    if (!this.duplicateAllowed && isDuplicate) {
      return;
    }

    this.tagValues.splice(this.dragDropProvider.droppingIndex, 0, this.dragDropProvider.draggingTag);
  }

  /**
   * Add multiple tags. Events like paste items use this method.
   * Seperate multiple tags
   */
  pasteTags(tags: Tag[]): void {
    tags.forEach(tag => {
      this.addTag(tag);
    });
  }

  /**
   * Remove a new tag from container. Works with (x) anchor.
   */
  removeTag(id: number): void {
    const removedTag = this.tagValues.filter(tag => tag.id === id);
    this.tagValues = this.tagValues.filter(tag => tag.id !== id);
    this.onRemoveEmitter.emit(removedTag[0]);
  }

  /**
   * Remove a new tag from sender container(starting dragging zone).
   * Only works after drag and drop operations
   */
  removeTagAfterDragDrop(id: number): void {
    this.tagValues = this.dragDropProvider.senderComponent.tagValues
  }

  /**
   * Parent communication for which tag is selected
   */
  selectTag(tag: Tag): void {
    if (this.selectedTagId !== tag.id) {
      this.selectedTagId = tag.id;
    } else {
      this.selectedTagId = -1;
    }
    this.onSelectEmitter.emit(tag);
  }

  /**
   * Remove tag from list and edit in tag input component for a new tag
   */
  assignTagToEdit(tag: Tag): void {
    const newTag = this.tagInputComponent.form.controls['newTag'].value;
    if (newTag != null && newTag.length > 0) {
      // This solved the problem to remove all tags by doubleclicking
      // If any newTag value is active, you cannot edit.
      return;
    }

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
  checkDuplicate(tags: Tag[], value: string): boolean {
    if (!tags) {
      return false;
    }
    const _tags = tags.map(function (t) { return t.value });
    const isDuplicate = _tags.some(t => t === value);

    return isDuplicate;
  }

  /**
   * Starting event of dragging single tag
   */
  onDragStart(event: DragEvent, tag: Tag, index: number): void {
    event.stopPropagation();
    this.dragDropProvider.draggingTag = tag;
    this.dragDropProvider.startingIndex = index;
    this.dragDropProvider.senderComponent = this;
  }

  /**
   * Getting dragged over item and index to replace it
   */
  onDragOver(event: DragEvent, index: number): void {
    event.preventDefault();
    this.onDrag = true;
    this.dragDropProvider.droppingIndex = index;
  }

  /**
   * Setting active dragged zone value. The zone that tag is dragged to.
   */
  onZoneDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragDropProvider.receiverComponent = this;
  }

  /**
   * Removing cursor from the screen by setting onDrag to false after leaving drag zone for ngym-tag.
   */
  onDragLeave(event: DragEvent, t: Tag): void {
    this.onDrag = false;
  }

  /**
   * Removing cursor from the screen by setting onDrag to false after leaving drag zone for ngym-tag-container.
   */
  onZoneDragLeave(event: DragEvent): void {
    this.onDrag = false;
    this.dragDropProvider.receiverComponent = new TagContainerComponent(new DragDropProvider);
  }

  /**
   * Removing cursor from the screen by setting onDrag to false after drag end.
   */
  onDragEnd(event: DragEvent): void {
    this.onDrag = false;

    if (this.dragDropProvider.senderComponent.dragZone === this.dragDropProvider.receiverComponent.dragZone) {
      return;
    }

    if (this.dragDropProvider.receiverComponent.dragZone === undefined) {
      return;
    }

    this.removeTag(this.dragDropProvider.draggingTag.id);
  }

  /**
   * Drag event drops. Removing item first and then inserting it at desired index.
   */
  onDrop(event: DragEvent): void {
    this.onDrag = false;

    if (this.dragDropProvider.senderComponent.dragZone === this.dragDropProvider.receiverComponent.dragZone &&
      this.dragDropProvider.startingIndex === this.dragDropProvider.droppingIndex) {
      return;
    }

    this.addTagAfterDragDrop();
  }
}
