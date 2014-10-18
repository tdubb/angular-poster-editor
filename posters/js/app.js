"use strict";

var app = angular.module('posters', ["posters.controllers", 'ui.bootstrap', 'ui.slider']);

app.config(function ($routeProvider) {
  $routeProvider
  .when("/carousel", {controller: "CarouselCtrl", templateUrl: "partials/carousel.html"})
  .when("/preview", {controller: "PreviewCtrl", templateUrl: "partials/preview.html"})
  .otherwise({redirectTo: "/carousel"});
})
