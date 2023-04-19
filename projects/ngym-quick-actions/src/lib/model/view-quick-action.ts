export class ViewQuickAction {
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