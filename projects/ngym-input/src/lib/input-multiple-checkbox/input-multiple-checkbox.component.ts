import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngym-input-multiple-checkbox',
  templateUrl: './input-multiple-checkbox.component.html',
  styleUrls: ['./input-multiple-checkbox.component.scss']
})
export class InputMultipleCheckboxComponent {
  tags: string[] = [];
  isLoading!: boolean;
  showTags: boolean = false;
  @Input() items!: string[];
  @Input() addTagPlaceholder!: string;
  @Output() tagsEmitter = new EventEmitter<string[]>();

  openTags(): void {
    this.showTags = !this.showTags;
  }

  selectTag(tag: string): void {
    if (this.tags.indexOf(tag) > -1) {
      return;
    }
    this.showTags = false;
    this.tags.push(tag);
    this.tagsEmitter.emit(this.tags);
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);
    if (index !== -1) {
      this.tags.splice(index, 1);
      this.tagsEmitter.emit(this.tags);
    }
  }
}
