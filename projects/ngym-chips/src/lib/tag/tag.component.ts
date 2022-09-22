import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, TemplateRef } from '@angular/core';
import { Tag } from '../model/tag';

@Component({
  selector: 'ngym-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  valid!: boolean;
  isEditable: boolean = false;
  regex!: RegExp
  @Input() selectedTagId!: number;
  @Input() dragAllowed!: boolean;
  @Input() pattern!: RegExp;
  @Input() tag!: Tag;
  @Input() tagTemplate!: TemplateRef<any>;
  @Output() onSelectEmitter = new EventEmitter<Tag>();
  @Output() onRemoveEmitter = new EventEmitter<number>();
  @Output() onEditEmitter = new EventEmitter<Tag>();

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.validateValue();
    this.isDragDropAllowed();
  }

  /**
   *  Selecting tag and parent communication.
   */
  selectTag(tag: Tag): void {
    // Communication to Parent Component(TagContainer) to select tag with object itself.
    this.onSelectEmitter.emit(tag);
  }

  /**
   *  Editing tag and parent communication if editAllowed is set to true.
   */
  editTag(tag: Tag): void {
    this.onEditEmitter.emit(tag);
  }

  /**
   * Communication to Parent Component(TagContainer) to remove tag with id @params id.
   */
  removeTag(id: number): void {
    this.onRemoveEmitter.emit(id);
  }

  /**
   *  Validating tag value by given regex. If invalid, making text red.
   */
  validateValue(): void {
    this.valid = this.pattern.test(this.tag.value);
  }

  /**
   *  Allowing users to drag and drop by parameter. Default is false.
   */
  isDragDropAllowed(): void {
    if (!this.dragAllowed) {
      this.renderer.setAttribute(this.el.nativeElement, 'draggable', 'false');
    } else {
      this.renderer.setAttribute(this.el.nativeElement, 'draggable', 'true');
    }
  }
}
