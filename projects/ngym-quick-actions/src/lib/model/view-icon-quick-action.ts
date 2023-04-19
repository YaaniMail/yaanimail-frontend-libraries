import { ViewQuickAction } from "./view-quick-action";

export class ViewIconQuickAction extends ViewQuickAction {
    isOnlyIcon: boolean = true
    buttonClasses: string;
    iconClasses: string;

    constructor(label: string, actionType: any, buttonClasses: string, iconClasses: string, robotClass: string) {
        super(label, actionType, robotClass);
        this.buttonClasses = buttonClasses;
        this.iconClasses = iconClasses;
    }
}