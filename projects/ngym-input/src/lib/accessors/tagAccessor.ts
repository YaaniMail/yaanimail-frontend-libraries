import { Directive } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

export class TagsAccessor implements ControlValueAccessor {
    private _value!: any;
    public get tagValues(): any {
        return this._value;
    }

    public set tagValues(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

    constructor() { }

    onChange = (_: any) => { };

    onTouched = () => { };

    writeValue(value: any): void {
        this.tagValues = value;
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