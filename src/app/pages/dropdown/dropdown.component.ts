import { Component, OnInit } from '@angular/core';
import { DropDownItem } from 'ngym-dropdown';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
    selectedValue!: string;
    dropdownMenuActions: DropDownItem[] = [];

    constructor() { }

    ngOnInit(): void {
        this.getDropdownMenuActions();
        this.selectedValue = 'Porthos';
    }

    getDropdownMenuActions(): void {
        this.dropdownMenuActions = [];
        this.dropdownMenuActions.push(
            {
                robotClass: 'robot_sidebar_editFolder',
                label: 'Athos',
                action: 'ATHOS'
            },
            {
                robotClass: 'robot_sidebar_addSubFolder',
                label: 'Porthos',
                action: 'PORTHOS',
                isChecked: true
            },
            {
                robotClass: 'robot_sidebar_deleteFolder',
                label: 'Aramis',
                action: 'ARAMIS'
            }
        );
    }

    performAction(greeting: string, action: string): void {
        this.selectedValue = (this.dropdownMenuActions.find(m => action === m.action)?.label || '');
        this.dropdownMenuActions.forEach(m => m.isChecked = (action === m.action));
        console.log(greeting + ' ' + this.selectedValue + '!');
    }
}
