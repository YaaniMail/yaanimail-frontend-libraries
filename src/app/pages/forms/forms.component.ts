import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  form!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      password: ['', Validators.required],
      type: ['', [Validators.required]],
    });
  }

  submitForm(): void {
    console.log(this.form.value);
  }

  /** Dropdown select change */
  onSelectChange(e: any): void {
    console.log(e);
  }

}
