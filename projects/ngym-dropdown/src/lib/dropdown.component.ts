import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';
import { DropDownItem } from './model/drop-down-item';

@Component({
  selector: 'ngym-dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnDestroy {
  scrollEventsSubscription!: Subscription;
  @Input() isDropup: boolean = false;
  @Input() selectedValue: string = '';
  @Input() classes: string = '';
  @Input() dropdownClasses: string = '';
  @Input() iconClasses: string = '';
  @Input() buttonClasses: string = '';
  @Input() container: string | null = null;
  @Input() placement: string = '';
  @Input() items: DropDownItem[] = [];
  @Input() checkedIconHtml!: TemplateRef<any>;
  @Input() scrollEventsObservable!: Observable<void>;
  @Output() actionEmitter = new EventEmitter<any>();
  @ViewChild(BsDropdownDirective) dropdown!: BsDropdownDirective;

  constructor() { }

  ngOnInit() {
    this.scrollEventsSubscription = this.scrollEventsObservable?.subscribe(() => this.closeDropDown());
  }

  ngOnDestroy() {
    this.scrollEventsSubscription?.unsubscribe();
  }

  closeDropDown(): void {
    this.dropdown?.hide();
  }
}
