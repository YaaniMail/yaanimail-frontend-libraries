import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ViewDropDownQuickAction } from './model/view-dropdown-quick-action';
import { ViewIconQuickAction } from './model/view-icon-quick-action';
import { DropDownItem } from 'ngym-dropdown';

@Component({
  selector: 'ngym-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent implements OnChanges {
  iconActions: (ViewIconQuickAction | ViewDropDownQuickAction)[] = [];
  dropDownActions: (ViewIconQuickAction | ViewDropDownQuickAction)[] = [];
  dropDownItems: DropDownItem[] = [];
  @Input() isLoading: boolean = false;
  @Input() isTooltipDisabled: boolean = false;
  @Input() classes: string = '';
  @Input() dropdownContainerClasses: string = '';
  @Input() dropdownClasses: string = '';
  @Input() dropdownIconClasses: string = '';
  @Input() dropdownButtonClasses: string = '';
  @Input() dropdownPlacement: string = '';
  @Input() dropdownContainer: string = '';
  @Input() actions: (ViewIconQuickAction | ViewDropDownQuickAction)[] = [];
  @Input() iconStdClasses!: { primary: string, disabled: string };
  @Input() textStdClasses!: { primary: string, disabled: string };
  @Output() actionEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.prepareActions();
  }

  prepareActions(): void {
    this.iconActions = this.actions.filter(action => action instanceof ViewIconQuickAction);
    this.dropDownActions = this.actions.filter(action => action instanceof ViewDropDownQuickAction);
    this.prepareDropdownActions();
  }

  prepareDropdownActions(): void {
    this.dropDownItems = [];
    this.dropDownActions.forEach(action => {
      this.dropDownItems.push(
        {
          robotClass: action.robotClass,
          label: action.label,
          action: action,
          linkClasses: !(action.isActionAllowed) ? this.textStdClasses.disabled : '',
          isLoadingClasses: action.checkIsLoading ? this.textStdClasses.disabled : ''
        }
      );
    });
  }

  performDropdownAction(action: (ViewIconQuickAction | ViewDropDownQuickAction)) {
    if (action.isActionAllowed && (!action.checkIsLoading || (action.checkIsLoading && !this.isLoading)))
      this.actionEmitter.emit(action.actionType);
  }
}
