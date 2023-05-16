import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'homeNumber' })
export class HomeNumberPipe implements PipeTransform {
    transform(homeNumber: string) {
        if (homeNumber === undefined) {
            return;
        }
        const length = homeNumber.toString().length;
        const code = homeNumber.toString().substr(0, length - 7);
        const phone = homeNumber.toString().slice(-7);
        const phoneSectionOne = phone.toString().substr(0, 3);
        const phoneSectionTwo = phone.toString().substr(3, 4);

        return '(' + code + ') ' + ' ' + phoneSectionOne + ' ' + phoneSectionTwo;
    }
}