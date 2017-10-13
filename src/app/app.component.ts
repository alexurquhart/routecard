import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  point: __esri.Point = null;

  mouseMove(evt) {
    console.log(this.point);
  }

  ngOnInit() {
    setInterval(() => {
      if (this.point) {
        this.point.longitude += 0.5;
      }
    }, 250);
  }
}
