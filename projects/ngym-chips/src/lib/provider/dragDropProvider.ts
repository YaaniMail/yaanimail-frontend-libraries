import { Injectable } from '@angular/core';
import { Tag } from '../model/tag';
import { TagContainerComponent } from '../tag-container/tag-container.component';

@Injectable({
    providedIn: 'root'
})
export class DragDropProvider {
    private _startingIndex!: number;
    private _droppingIndex!: number;
    private _draggingTag!: Tag;
    private _senderComponent!: TagContainerComponent;
    private _receiverComponent!: TagContainerComponent;

    constructor() { }

    get startingIndex() {
        return this._startingIndex;
    }

    set startingIndex(index: number) {
        this._startingIndex = index;
    }

    get droppingIndex() {
        return this._droppingIndex;
    }

    set droppingIndex(index: number) {
        this._droppingIndex = index;
    }

    get draggingTag() {
        return this._draggingTag;
    }

    set draggingTag(tag: Tag) {
        this._draggingTag = tag;
    }

    get senderComponent() {
        return this._senderComponent;
    }

    set senderComponent(component: TagContainerComponent) {
        this._senderComponent = component;
    }

    get receiverComponent() {
        return this._receiverComponent;
    }

    set receiverComponent(component: TagContainerComponent) {
        this._receiverComponent = component;
    }
}
