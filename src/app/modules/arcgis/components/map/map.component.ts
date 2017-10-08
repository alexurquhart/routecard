import { Component, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { EsriLoaderService } from '../../services/esri-loader.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  private map: __esri.Map;
  private mapView: __esri.MapView;

  private Draw: __esri.DrawConstructor;

  @ViewChild('mapNode') private mapViewEl: ElementRef;

  constructor(private esriLoaderSvc: EsriLoaderService) {}

  async ngOnInit() {
    const [Map, MapView, Draw]: [__esri.MapConstructor, __esri.MapViewConstructor, __esri.DrawConstructor] =
      await this.esriLoaderSvc.require('esri/Map', 'esri/views/MapView', 'esri/views/2d/draw/Draw');

    this.Draw = Draw;

    const mapProperties = {
      basemap: 'streets-night-vector'
    };

    this.map = new Map(<__esri.MapProperties>mapProperties);

    this.mapView = new MapView({
      map: this.map,
      container: this.mapViewEl.nativeElement
    });
  }
}
