import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngym-home-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';

  constructor() { }
}
