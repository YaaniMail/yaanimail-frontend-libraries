import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngym-tag-select',
  templateUrl: './tag-select.component.html',
  styleUrls: ['./tag-select.component.scss']
})
export class TagSelectComponent {
  tags: string[] = [];
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
