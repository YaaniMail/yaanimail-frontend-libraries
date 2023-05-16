import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'msisdn' })
export class MsisdnPipe implements PipeTransform {
    transform(msisdn: string) {
        if (msisdn === undefined) {
            return;
        }
        const length = msisdn.toString().length;
        const code = msisdn.toString().substr(0, length - 10);
        const operator = msisdn.toString().slice(-10).substr(0, 3);
        const phone = msisdn.toString().slice(-7);
        const phoneSectionOne = phone.toString().substr(0, 3);
        const phoneSectionTwo = phone.toString().substr(3, 4);

        if (code !== '') {
            return '(+' + code + ') ' + operator + ' ' + phoneSectionOne + ' ' + phoneSectionTwo;
        } else {
            return '(' + operator + ')' + ' ' + phoneSectionOne + ' ' + phoneSectionTwo;
        }

    }
}