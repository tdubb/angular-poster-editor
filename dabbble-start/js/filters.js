'use strict';

var filters = angular.module("dabbble.filters", []);

filters.filter('dabbbleDate', function ($filter) {

  return function (value, format) {
    if (value) {
      value = Date.parse(value);
    }
    console.log(value, format);
    return $filter('date')(value, format);
  }
});
