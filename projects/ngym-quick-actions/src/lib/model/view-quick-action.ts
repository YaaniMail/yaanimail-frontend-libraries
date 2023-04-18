class ViewQuickAction {
    isActionAllowed: boolean = true;
    checkIsLoading: boolean = false;
    label: string;
    robotClass: string;
    actionType: any;

    constructor(label: string, actionType: any, robotClass: string) {
        this.label = label;
        this.actionType = actionType;
        this.robotClass = robotClass;
    }
}

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

export class ViewDropDownQuickAction extends ViewQuickAction {
    constructor(label: string, actionType: any, robotClass: string) {
        super(label, actionType, robotClass);
    }
}