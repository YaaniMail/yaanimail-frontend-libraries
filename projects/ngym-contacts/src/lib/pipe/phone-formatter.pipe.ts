import { Pipe, PipeTransform } from '@angular/core';
import { MaskPipe } from "ngx-mask";
import parsePhoneNumber from 'libphonenumber-js'

@Pipe({
  name: 'phoneFormatter'
})
export class PhoneFormatterPipe implements PipeTransform {

  constructor(private maskPipe:MaskPipe) {
  }

  transform(value: string): unknown {
    value = value?.trim();

    const phoneNumber = parsePhoneNumber(value);
    if (phoneNumber){
      const formattedNumber = phoneNumber.formatInternational().split(' ');
      formattedNumber[1] = `(${formattedNumber[1]})`
      return formattedNumber.join(' ');
    }


    let numbers = value.replace(/\D+/g,'');
    const code = numbers.slice(0,-7);

    let pattern='';

    if (!code){
      pattern = '(000)';
    } else if(code.length === 1){
      pattern = '(0000)';
    } else if (code.length === 3){
      pattern = '(000) 000'
    } else if (code.length == 4){
      pattern = '(0000) 000';
    } else {
      return value;
    }

    pattern += ' 00 00';
    return this.maskPipe.transform(numbers, pattern);

  }

}
