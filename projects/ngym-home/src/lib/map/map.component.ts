import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngym-home-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() tagline: string = '';

  constructor() { }

}
