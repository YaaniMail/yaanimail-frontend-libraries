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
    phoneTypeArray: SelectInputType[] = [{ name: 'Ev', value: 'Home' }, { name: 'Diğer', value: 'Other' }, { name: 'İş', value: 'Work' }, { name: 'Cep', value: 'Mobile' }];
    contact: any;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        // this.phoneTypeArray = 
        this.form = this.fb.group({
            phone: this.fb.array([]),
        });

        this.contact =
        {
            "fullname": 'Arkada1 Soyad', "firstname": "Arkada\u015f1", "lastname": "Soyad\u0131", "email": ["arkadas1@gmail.com", "arkadas2@gmail.com", "arkadas3@gmail.com", "arkadas4@gmail.com"], "addresses": [{ "type": "home", "data": { "city": "1", "country": "1", "postalcode": "1", "state": "1" } }, { "type": "other", "data": { "city": "3", "country": "3", "postalcode": "3", "state": "3", "street": "3" } }, { "type": "work", "data": { "city": "2", "country": "2", "postalcode": "2", "state": "2", "street": "2" } }], "phone": [{ "type": "home", "data": "222222" }, { "type": "mobile", "data": "111111" }, { "type": "other", "data": "444444" }, { "type": "work", "data": "333333" }], "notes": "not", "jobtitle": "\u00dcnvan\u0131", "company": "\u015eirketi", "id": "6485", "create_date": "1681827158000", "tag_names": []
        }

        this.appendPhones();
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

    appendPhones(): void {
        for (let i = 0; i < this.contact.phone.length; i++) {
            console.log(this.contact.phone[i].type);
            this.phonesArray.push(this.fb.group({
                type: this.contact.phone[i].type,
                data: this.contact.phone[i].data,
            }));
        }
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
