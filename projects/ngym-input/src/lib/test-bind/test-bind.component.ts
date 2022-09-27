import { Component, EventEmitter, forwardRef, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { TagsAccessor } from '../accessors/tagAccessor';
import { Tag } from './tag';

@Component({
  selector: 'lib-test-bind',
  templateUrl: './test-bind.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TestBindComponent),
    multi: true
  }]
})
export class TestBindComponent extends TagsAccessor implements OnInit {
  _tagValues: Tag[] = [];
  form!: FormGroup;
  @Input() tagTemplate!: TemplateRef<any>;
  @Output() onAddEmitter = new EventEmitter();

  constructor(private fb: FormBuilder) { super(); }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  add(): void {
    const _item = { 'name': this.form.value.name };
    // this.items.push(_item);
    this.tagValues = this._tagValues;
    this.onAddEmitter.emit(_item);
  }

}
