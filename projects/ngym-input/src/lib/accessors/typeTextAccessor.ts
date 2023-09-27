import { Directive } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Directive({
    selector:
        'input[type=text][formControlName], input[type = text][formControl], input[type=password][formControlName], input[type = password][formControl]',
})
export class InputTypeTextAccessor implements ControlValueAccessor {
    private _value!: string;
    public get inputValue(): string {
        return this._value;
    }

    public set inputValue(v: string) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

    constructor() { }

    onChange = (_: string) => { };

    onTouched = () => { };

    writeValue(value: any): void {
        this.inputValue = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        // throw new Error("Method not implemented.");
    }
}