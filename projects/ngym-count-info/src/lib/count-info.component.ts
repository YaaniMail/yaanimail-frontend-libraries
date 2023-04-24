import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngym-count-info',
  templateUrl: 'count-info.component.html',
  styleUrls: ['./count-info.component.scss']
})
export class CountInfoComponent {

  @Input() classes: string = '';
  @Input() count: number = 0;
  @Input() maxCountValue: number = 9999;

  constructor() { }
}
