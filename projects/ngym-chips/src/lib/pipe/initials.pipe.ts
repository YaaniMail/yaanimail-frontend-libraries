import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initials' })
export class InitialsPipe implements PipeTransform {
    transform(name: string): string {
        if (name === null || name === undefined) {
            return '';
        }

        let letters: string[] = [];
        let firstLettersOfName = '';
        letters = name.trim().split(' ');

        if (letters.length === 1) {
            firstLettersOfName = letters[0].substring(0, 1).toLocaleUpperCase();
        } else {
            if (letters.length === 2) {
                firstLettersOfName = letters[0].substring(0, 1).toUpperCase() + letters[1].substring(0, 1).toUpperCase();
            } else {
                firstLettersOfName = letters[0].substring(0, 1).toUpperCase() + letters[letters.length - 1].substring(0, 1).toUpperCase();
            }
        }

        if (firstLettersOfName.trim() === '') {
            return '-';
        } else {
            return firstLettersOfName;
        }
    }
}
