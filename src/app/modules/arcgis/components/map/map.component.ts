import { Component, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { EsriLoaderService } from '../../services/esri-loader.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  map: __esri.Map;
  mapView: __esri.MapView;

  @ViewChild('mapNode') private mapViewEl: ElementRef;

  constructor(private esriLoaderSvc: EsriLoaderService) {}

  async ngOnInit() {
    const [Map, MapView]: [__esri.MapConstructor, __esri.MapViewConstructor] =
      await this.esriLoaderSvc.require('esri/Map', 'esri/views/MapView');

      const mapProperties = {
        basemap: 'hybrid'
      };

    this.map = new Map(<__esri.MapProperties>mapProperties);

    this.mapView = new MapView({
      map: this.map,
      container: this.mapViewEl.nativeElement
    });
  }

}
