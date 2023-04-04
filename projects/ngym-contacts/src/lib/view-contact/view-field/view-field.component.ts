import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
    selector: 'ngym-view-field',
    templateUrl: './view-field.component.html',
    styleUrls: ['./view-field.component.scss']
})
export class ViewFieldComponent implements OnInit {
    @Input() title!: string;
    @Input() type!: string;
    @Input() element!: string;
    @Input() array!: [];

    constructor(

    ) { }

    ngOnInit(): void {
    }

}
