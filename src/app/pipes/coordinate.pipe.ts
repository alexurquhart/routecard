import { Pipe, PipeTransform } from '@angular/core';
import { CoordinatePipeArgs } from '../interfaces/coordinate-pipe-args';


@Pipe({
  name: 'coordinate'
})
export class CoordinatePipe implements PipeTransform {

  transform(value: __esri.Point, args: CoordinatePipeArgs = { format: 'mgrs', mgrsAccuracy: 1 }): any {
    if (value === undefined) {
      return null;
    }

    switch (args.format) {
      case 'mgrs':
        return this.transformMGRS(value, args.mgrsAccuracy);
      case 'dd':
        return this.transformDD(value, args.decimals);
      default:
    }
  }

  // Convert to an MGRS grid string
  private transformMGRS(point: __esri.Point, accuracy: number): string {
    const conversion = mgrs.forward([point.longitude, point.latitude], accuracy);

    // Convert the string to it's parts
    const regexp = /(\d+\w)(\w{2})(\d+)/;
    const [na, designator, identifier, coordinate] = regexp.exec(conversion);

    // Extract eastings and northings
    const eastings = coordinate.slice(0, coordinate.length / 2);
    const northings = coordinate.slice((coordinate.length / 2));

    // Return the formatted MGRS string
    return `${designator} ${identifier} ${eastings} ${northings}`;
  }

  // Transform to decimal degrees
  private transformDD(point: __esri.Point, decimals: number = 5) {
    return `${point.latitude.toFixed(decimals)} ${point.longitude.toFixed(decimals)}`;
  }

}
