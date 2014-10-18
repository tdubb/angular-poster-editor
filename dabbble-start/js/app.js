"use strict";

var app = angular.module('dabbble', ['dabbble.controllers','dabbble.filters', 'dabbble.services']);

app.config(function ($routeProvider) {
  $routeProvider
  .when("/:list", {controller:"ShotsListCtrl", templateUrl: "partials/shots_list.html"})
  .when("/shots/:id", {controller:"ShotsCtrl", templateUrl: "partials/shot.html"})
  .otherwise({redirectTo: "popular"});
})
