import { Component, Input } from '@angular/core';
import { ViewContactConfig } from '../../model/config';


@Component({
    selector: 'ngym-view-field',
    templateUrl: './view-field.component.html',
    styleUrls: ['./view-field.component.scss']
})
export class ViewFieldComponent {
    @Input() title!: string;
    @Input() type!: string;
    @Input() element!: string;
    @Input() elements!: []
    @Input() config!: ViewContactConfig;
}
