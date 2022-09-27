import { ControlValueAccessor } from "@angular/forms";
import { Tag } from "../test-bind/tag";

export class TagsAccessor implements ControlValueAccessor {
    private _value!: Tag[];
    public get tagValues(): Tag[] {
        return this._value;
    }

    public set tagValues(v: Tag[]) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

    constructor() { }

    onChange = (_: Tag[]) => { };

    onTouched = () => { };

    writeValue(value: Tag[]): void {
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