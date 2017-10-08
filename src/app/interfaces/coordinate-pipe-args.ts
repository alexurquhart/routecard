// Arguments for the coordinate pipe
export interface CoordinatePipeArgs {
  // Format of the output coordinate
  format: 'mgrs' | 'utm' | 'dd' | 'ddm' | 'dms';

  // Accuracy of output MGRS coordinates
  // Only works if the format is mgrs
  mgrsAccuracy?: 1 | 10 | 100 | 1000;

  // Number of decimal places to output for dd and ddm
  decimals?: number;
}
