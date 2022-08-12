import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tag } from '../model/tag';

@Component({
  selector: 'ngym-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  valid!: boolean;
  selected!: boolean;
  isEditable: boolean = false;
  regex!: RegExp
  @Input() pattern!: RegExp;
  @Input() tag!: Tag;
  @Output() onSelectEmitter = new EventEmitter<Tag>();
  @Output() onRemoveEmitter = new EventEmitter<number>();
  @Output() onEditEmitter = new EventEmitter<Tag>();

  constructor() { }

  ngOnInit(): void {
    this.validateValue();
  }

  /**
   *  Selecting tag and parent communication
   */
  selectTag(tag: Tag): void {
    // changing background of the Tag for selecting
    this.selected = !this.selected;
    // Communication to Parent Component(TagContainer) to select tag with object itself
    this.onSelectEmitter.emit(tag);
  }

  /**
   *  Editing tag and parent communication if editAllowed is set to true
   */
  editTag(tag: Tag): void {
    this.onEditEmitter.emit(tag);
  }

  /**
   * Communication to Parent Component(TagContainer) to remove tag with id @params id
   */
  removeTag(id: number): void {
    this.onRemoveEmitter.emit(id);
  }

  /**
   *  Validating tag value by given regex. If invalid, making text red.
   */
  validateValue(): void {
    this.valid = this.pattern.test(this.tag.value);
  }
}
