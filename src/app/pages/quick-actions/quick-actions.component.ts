import { Component, OnInit } from '@angular/core';
import { ViewDropDownQuickAction, ViewIconQuickAction } from 'ngym-quick-actions';

@Component({
    selector: 'app-quick-actions',
    templateUrl: './quick-actions.component.html',
    styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent implements OnInit {
    actions: (ViewIconQuickAction | ViewDropDownQuickAction)[] = [];

    constructor() { }

    ngOnInit(): void {
        this.initActions();
    }

    initActions(): void {
        this.actions = [];
        this.actions.push(
            this.getReplyAction(),
            this.getReplyAllAction(),
            this.getForwardAction(),
            this.getFlagOrUnflagAction(),
            this.getSpamOrNotSpamAction(),
            this.getBlockSenderAction()
        );
    }

    getReplyAction(): ViewIconQuickAction {
        const action = new ViewIconQuickAction(
            'Reply',
            'REPLY',
            'btn btn-icon',
            'fak fa-reply-regular fa-normal',
            'robot_view_iconReply'
        );
        action.isActionAllowed = true;

        return action;
    }

    getReplyAllAction(): ViewIconQuickAction {
        const action = new ViewIconQuickAction(
            'Reply All',
            'REPLY_ALL',
            'btn btn-icon',
            'fak fa-reply-all-regular fa-normal',
            'robot_view_iconReplyAll'
        );

        return action;
    }

    getForwardAction(): ViewIconQuickAction {
        const action = new ViewIconQuickAction(
            'Forward',
            'FORWARD',
            'btn btn-icon',
            'fak fa-share-regular fa-normal',
            'robot_view_iconForward'
        );

        return action;
    }

    getFlagOrUnflagAction(): ViewDropDownQuickAction {
        const action = new ViewDropDownQuickAction(
            'Action',
            'FLAG',
            'robot_view_flag'
        );

        return action;
    }

    getSpamOrNotSpamAction(): ViewDropDownQuickAction {
        const action = new ViewDropDownQuickAction(
            'Spam',
            'SPAM',
            'robot_view_markAsSpam'
        );

        return action;
    }

    getBlockSenderAction(): ViewDropDownQuickAction {
        const action = new ViewDropDownQuickAction(
            'Block Sender',
            'BLOCK_MAIL',
            'robot_view_blockSender'
        );

        return action;
    }

    performAction(actionType: string, greeting: string): void {
        switch (actionType) {
            case 'REPLY':
                console.log(actionType + ' says ' + greeting + ' 1');
                break;
            case 'REPLY_ALL':
                console.log(actionType + ' says ' + greeting + ' 2');
                break;
            case 'FORWARD':
                console.log(actionType + ' says ' + greeting + ' 3');
                break;
            case 'FLAG':
                console.log(actionType + ' says ' + greeting + ' 4');
                break;
            case 'SPAM':
                console.log(actionType + ' says ' + greeting + ' 5');
                break;
            case 'BLOCK_MAIL':
                console.log(actionType + ' says ' + greeting + ' 6');
                break;
        }
    }
}
