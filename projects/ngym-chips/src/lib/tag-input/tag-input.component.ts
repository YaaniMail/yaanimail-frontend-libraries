import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoComplete } from '../model/autoComplete';
import { Tag } from '../model/tag';

@Component({
  selector: 'ngym-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']
})
export class TagInputComponent implements OnInit, OnChanges {
  autoCompleteTags!: string[];
  id: number = 0;
  autoCompleteVisible: boolean = false;
  form!: FormGroup;
  @Input() placeholder!: string;
  @Input() splitChars!: string[];
  @Input() autoCompleteItems!: AutoComplete[];
  @Input() autoCompleteTemplate!: TemplateRef<any>;
  @Input() isLoading!: boolean;
  @Output() onKeyPressedEmitter = new EventEmitter<string>();
  @Output() onEnterEmitter = new EventEmitter<Tag>();
  @Output() onPasteEmitter = new EventEmitter<Tag[]>();
  @Output() onAutoCompleteSelectEmitter = new EventEmitter<Tag>();
  @ViewChild('newTag') tagInput!: ElementRef;
  @ViewChild('autoComplete') autoComplete!: ElementRef<any>;
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.autoComplete && !this.autoComplete.nativeElement?.contains(event.target)) {
      this.autoCompleteVisible = false;
    }

    if (!this.tagInput.nativeElement.contains(event.target)) {
      this.onEnter();
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(): void {
    if (!this.autoCompleteVisible) {
      this.autoCompleteItems = [];
    }
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
  createTagObject(value: string): Tag {
    const tag = new Tag();
    tag.value = value;
    tag.id = Math.floor((1 + Math.random()) * 0x10000)
    return tag;
  }

  /**
   * Creating a tag object from selected auto complete item and passing it to parent
   */
  selectAutoCompleteItem(item: AutoComplete): void {
    const _tag = this.createTagObject(item.email);
    this.onAutoCompleteSelectEmitter.emit(_tag);
    this.form.reset();

    this.autoCompleteVisible = false;
  }

  /**
   * Setting tag-input value with the tag that needs to be edited
   */
  changeInputToEdit(tag: Tag): void {
    this.form.reset();
    this.form.controls['newTag'].setValue(tag.value);
    setTimeout(() => { // this will make the execution after the above boolean has changed
      this.tagInput.nativeElement.focus();
    }, 0);
  }

  /**
   * Getting auto complete suggestion tags for dropdown use
   * Start from at least 2 charachters
   */
  onKeyPressed(e: any): void {
    if (!this.isValidChar(e.keyCode)) {
      return;
    }

    const draft = this.form.value.newTag;
    if (draft === null || draft.length < 2) {
      this.autoCompleteVisible = false;
      return;
    }

    this.autoCompleteVisible = true;
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
    this.autoCompleteVisible = false;
  }

  /**
   * Create new tag and pass it to Parent component
   * Form reseting for reuse input element
   * Increasing id for next element
   */
  onEnter(): void {
    const tagValue = this.form.value.newTag;

    if (tagValue === '' || tagValue === null) {
      return;
    }

    const tag = this.createTagObject(tagValue);
    this.onEnterEmitter.emit(tag);

    this.form.reset();
    this.autoCompleteVisible = false;
  }

  /**
   * Getting on paste value. If there are keys[',', ';'], seperate tags.
   */
  onPaste(pastedText: string): void {
    const pastedTagArray: Tag[] = [];
    const splitArray = pastedText.trim().split(this.createSplitRegex());

    // Removing possible empty elements
    var filtered = splitArray.filter(function (el) {
      return el != '';
    });

    for (let i = 0; i < filtered.length; i++) {
      const tag = this.createTagObject(splitArray[i].trim());

      pastedTagArray.push(tag);
    }

    this.onPasteEmitter.emit(pastedTagArray);

    // This timeout is a workaround. ALternative is promise functions. Clearing field. Closing auto complete.
    setTimeout(() => {
      this.form.reset();
      this.autoCompleteVisible = false;
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
   * Validate chars according to keypress
   * Service call in autocomplete is not needed in un alpha numeric chars.
   */
  isValidChar(keyCode: number): boolean {
    if ((keyCode > 36 && keyCode < 41) || // up arrow, down arrow, left arrow, right arrow
      (keyCode > 15 && keyCode < 21) || // shift, caps, control, option
      (keyCode === 9 || keyCode === 32 || keyCode === 27)) { // tab, space, esc
      return false;
    }
    return true;
  };
}
