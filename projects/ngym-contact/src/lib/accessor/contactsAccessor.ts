import { ControlValueAccessor } from "@angular/forms";
import { ContactByRole } from "../model/contact-by-role";


export class ContactsAccessor implements ControlValueAccessor {
    private _value!: ContactByRole[];

    public get contactValues(): ContactByRole[] {
        return this._value;
    }

    public set contactValues(v: ContactByRole[]) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

    constructor() { }

    onChange = (_: ContactByRole[]) => { };

    onTouched = () => { };

    writeValue(value: ContactByRole[]): void {
        this.contactValues = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }
}