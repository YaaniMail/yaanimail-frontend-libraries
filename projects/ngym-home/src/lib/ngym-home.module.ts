import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    FeatureComponent,
    MapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeatureComponent,
    MapComponent
  ]
})
export class NgymHomeModule { }
