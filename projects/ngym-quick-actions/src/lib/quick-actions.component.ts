import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewIconQuickAction, ViewDropDownQuickAction } from './model/view-quick-action';
import { DropDownItem } from 'ngym-dropdown';

@Component({
  selector: 'lib-ngym-quick-actions',
  templateUrl: './quick-actions.component.html'
})
export class QuickActionsComponent implements OnInit {
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
  @Input() actions: (ViewIconQuickAction | ViewDropDownQuickAction)[] = [];
  @Input() iconStdClasses!: { primary: string, disabled: string };
  @Input() textStdClasses!: { primary: string, disabled: string };
  @Output() actionEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.iconActions = this.actions.filter(action => action instanceof ViewIconQuickAction);
    this.dropDownActions = this.actions.filter(action => action instanceof ViewDropDownQuickAction);
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
