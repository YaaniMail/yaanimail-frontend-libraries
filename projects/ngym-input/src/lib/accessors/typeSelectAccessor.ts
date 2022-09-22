import { ControlValueAccessor } from "@angular/forms";

export class TypeSelectAccessor implements ControlValueAccessor {
    // ControlValueAccessor Implementation
    onChange: any = () => { };
    onTouched: any = () => { };

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    writeValue(value: any) {
        //this.value = value;
    }

    setDisabledState(isDisabled: boolean) {
        //this.disabled = isDisabled;
    }
}