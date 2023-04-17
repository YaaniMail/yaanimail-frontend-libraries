import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectInputType } from 'projects/ngym-contacts/src/public-api';

@Component({
    selector: 'app-input-select',
    templateUrl: './input-select.component.html'
})
export class InputSelectComponent implements OnInit {
    inputGroupValue!: string;
    inputTextValue!: string;
    inputPasswordValue!: string;
    form!: FormGroup;
    phoneTypeArray: SelectInputType[] = [{ name: "Ev", value: 'Home' }, { name: "İş", value: 'Work' }];

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        // this.phoneTypeArray = 
        this.form = this.fb.group({
            phone: this.fb.array([]),
        });

        this.addPhoneNumber();
    }

    get phonesArray(): FormArray {
        return this.form.get('phone') as FormArray;
    }

    addPhoneNumber(): void {
        this.phonesArray.push(this.fb.group({
            type: this.phoneTypeArray[0].value,
            data: '',
        }));
    }

    showData(): void {
        console.log(this.form.value);
    }

    groupButtonRemove(): void {
        console.log('testing');
    }

    assignTags(e: any) {
        console.log('testing');
    }

}
