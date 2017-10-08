import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mgrs'
})
export class MGRSPipe implements PipeTransform {

  // MGRS transform returns a default 10-figure grid if accuracy is not specified
  transform(value: __esri.Point, figures: 10 | 8 | 6 | 4 = 10): any {
    if (value === undefined) { return ''; }

    // Convert to an accuracy figure
    const accuracy = figures / 2;

    // Convert to an MGRS grid string
    const conversion = mgrs.forward([value.longitude, value.latitude], accuracy);

    // Convert the string to it's parts
    const regexp = /(\d+\w)(\w{2})(\d+)/;
    const [na, designator, identifier, coordinate] = regexp.exec(conversion);

    // Extract eastings and northings
    const eastings = coordinate.slice(0, coordinate.length / 2);
    const northings = coordinate.slice((coordinate.length / 2));

    // Return the formatted MGRS string
    return `${designator} ${identifier} ${eastings} ${northings}`;
  }

}
