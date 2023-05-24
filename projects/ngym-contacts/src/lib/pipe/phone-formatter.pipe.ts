import { Pipe, PipeTransform } from '@angular/core';
import { MaskPipe } from "ngx-mask";
import parsePhoneNumber from 'libphonenumber-js';

@Pipe({
  name: 'phoneFormatter'
})
export class PhoneFormatterPipe implements PipeTransform {

  constructor(private maskPipe: MaskPipe) { }

  transform(value: string): unknown {
    value = value?.trim();

    const phoneNumber = parsePhoneNumber(value);
    if (phoneNumber) {
      const formattedNumber = phoneNumber.formatInternational().split(' ');
      formattedNumber[1] = formattedNumber.length > 3 ? `(${formattedNumber[1]})` : formattedNumber[1];
      return formattedNumber.join(' ');
    }

    let numbers = value.replace(/\D+/g, '');
    let pattern = '';
    let hasCountryCode = false;
    const code = numbers.slice(0, -7);

    if (!code) {
      pattern = '(000)';
    } else if (code.length === 1 || code.length === 2) {
      pattern = '(0000)';
    } else if (code.length === 3) {
      pattern = '(000) 000'
    } else if (code.length == 4) {
      pattern = '(0000) 000';
    } else if (code.length > 4) {
      hasCountryCode = true;
      for (let i = 0; i < code.length - 3; i++) {
        pattern += '0'
      }
      pattern += ' (000) 000'
    } else {
      return value;
    }

    pattern += ' 00 00';

    return `${hasCountryCode ? '+' : ''}${this.maskPipe.transform(numbers, pattern)}`;
  }

}
