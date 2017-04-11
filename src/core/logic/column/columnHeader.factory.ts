import angular from 'angular';

import moment from 'moment';

export default function (GanttColumn) {
  'ngInject';
  // Used to display the Gantt grid and header.
  // The columns are generated by the column generator.

  let ColumnHeader = function (startDate, endDate, viewScaleUnit, left, width, labelFormat, name) {
    startDate = moment(startDate);
    endDate = moment(endDate);

    let column = new GanttColumn(startDate, endDate, left, width);
    column.name = name;
    column.unit = viewScaleUnit;
    column.label = angular.isFunction(labelFormat) ? labelFormat(column) : startDate.format(labelFormat);

    return column;
  };
  return ColumnHeader;
}