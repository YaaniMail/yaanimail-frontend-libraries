import { ViewQuickAction } from "./view-quick-action";

export class ViewDropDownQuickAction extends ViewQuickAction {
    constructor(label: string, actionType: any, robotClass: string) {
        super(label, actionType, robotClass);
    }
}