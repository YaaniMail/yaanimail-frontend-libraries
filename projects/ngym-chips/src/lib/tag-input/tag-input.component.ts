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
  pastedTagArray: Tag[] = [];
  form!: FormGroup;
  @Input() splitChars!: string[];
  @Input() autoCompleteItems!: AutoComplete[];
  @Output() onKeyPressedEmitter = new EventEmitter<string>();
  @Output() onEnterEmitter = new EventEmitter<Tag>();
  @Output() onPasteEmitter = new EventEmitter<Tag[]>();
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

    this.id++;
    this.autoCompleteVisible = false;
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
   * Start from at least 2 charachters
   */
  onKeyPressed(): void {
    const draft = this.form.value.newTag;
    if (draft.length < 2) {
      return;
    }

    this.checkAutoCompleteVisible();
    this.onKeyPressedEmitter.emit(draft);
  }

  /**
   * onMouseDown event for tag-input
   */
  onMouseDown(): void {
    this.autoCompleteVisible = false;
  }

  /**
   * onFocus event for tag-input
   */
  onFocus(): void {
    this.checkAutoCompleteVisible();
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
    this.checkAutoCompleteVisible();
  }

  /**
   * Getting on paste value. If there are keys[',', ';'], seperate tags.
   */
  onPaste(pastedText: string): void {
    const splitArray = pastedText.trim().split(this.createSplitRegex());

    // Removing possible empty elements
    var filtered = splitArray.filter(function (el) {
      return el != '';
    });

    for (let i = 0; i < filtered.length; i++) {
      const tag = this.createTagObject(this.id, splitArray[i].trim());
      this.id++;

      this.pastedTagArray.push(tag);
    }

    this.onPasteEmitter.emit(this.pastedTagArray);

    // This timeout is a workaround. ALternative is promise functions. Clearing field. Closing auto complete.
    setTimeout(() => {
      this.form.reset();
      this.checkAutoCompleteVisible();
    }, 0);
  }

  /**
   * Creating a split pattern regex based on user input
   */
  createSplitRegex(): RegExp {
    let splitRegex!: RegExp;
    if (this.splitChars.includes(',') && this.splitChars.includes(';')) {
      splitRegex = /,|;/;
    } else if (this.splitChars.includes(',')) {
      splitRegex = /,/;
    } else if (this.splitChars.includes(';')) {
      splitRegex = /;/;
    }

    return splitRegex;
  }

  /**
   * Check if auto complete should be visible or not
   */
  checkAutoCompleteVisible(): void {
    const draft = this.form.value.newTag;

    if (draft === null) {
      this.autoCompleteVisible = false;
      return;
    }

    if (draft.length === 0) {
      this.autoCompleteVisible = false;
    } else {
      this.autoCompleteVisible = true;
    }
  }
}
