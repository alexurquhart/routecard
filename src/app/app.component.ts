import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  point: __esri.Point;

  mouseMove(evt) {
    this.point = evt;
  }
}
