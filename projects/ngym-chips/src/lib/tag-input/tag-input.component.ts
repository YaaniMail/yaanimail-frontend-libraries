import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoComplete } from '../model/autoComplete';
import { Tag } from '../model/tag';

@Component({
  selector: 'ngym-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']
})
export class TagInputComponent implements OnInit {
  autoCompleteTags!: string[];
  id: number = 0;
  autoCompleteVisible!: boolean;
  form!: FormGroup;
  @Input() autoCompleteItems!: AutoComplete[];
  @Output() onKeyPressedEmitter = new EventEmitter<string>();
  @Output() onEnterEmitter = new EventEmitter<Tag>();
  @Output() onAutoCompleteSelectEmitter = new EventEmitter<Tag>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * Creating default form.
   */
  createForm(): void {
    this.form = this.fb.group({
      newTag: ['', Validators.required]
    });
  }

  /**
   * Creating a tag object
   */
  createTagObject(id: number, value: string): Tag {
    const tag = new Tag();
    tag.id = id;
    tag.value = value;

    return tag;
  }

  /**
   * Creating a tag object from selected auto complete item and passing it to parent
   */
  selectAutoCompleteItem(item: AutoComplete): void {
    const _tag = this.createTagObject(this.id, item.email);
    this.onAutoCompleteSelectEmitter.emit(_tag);
    this.form.reset();
  }

  /**
   * Setting tag-input value with the tag that needs to be edited
   */
  changeInputToEdit(tag: Tag): void {
    this.form.reset();
    this.form.controls['newTag'].setValue(tag.value);
  }

  /**
   * Getting auto complete suggestion tags for dropdown use
   */
  onKeyPressed(): void {
    const draft = this.form.value.newTag;

    if (draft === null) {
      return;
    }

    if (draft.length === 0) {
      this.autoCompleteVisible = false;
    } else {
      this.autoCompleteVisible = true;
    }

    this.onKeyPressedEmitter.emit(draft);
  }

  /**
   * onBlur event for input
   */
  onBlur(): void {
    this.autoCompleteVisible = false;
  }

  /**
   * onFocus event for input
   */
  onFocus(): void {
    this.autoCompleteVisible = true;
  }

  /**
   * Create new tag and pass it to Parent component
   * Form reseting for reuse input element
   * Increasing id for next element
   */
  onEnter(event: KeyboardEvent): void {
    const tagValue = (event.target as HTMLInputElement).value;

    if (tagValue === '') {
      return;
    }

    const tag = this.createTagObject(this.id, tagValue);
    this.onEnterEmitter.emit(tag);

    this.id++;
    this.form.reset();
  }
}
