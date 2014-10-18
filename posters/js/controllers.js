'use strict';

var controllers = angular.module('posters.controllers', [])

controllers.controller("AppCtrl", function ($scope) {
  $scope.name = "Module";
});

controllers.controller("PreviewCtrl", function ($scope) {
  $scope.name = "Module";
});

controllers.controller("CarouselCtrl", function ($scope) {
  var title = $scope.title = "The Fire";
  var at = $scope.at = "at";
  $scope.venue = "The Buzzmill";
  $scope.date = "Saturday, October 27th 2014";
  $scope.time = "7:30pm";
  $scope.description = "Something Awesome";
  $scope.organizer = "byob";

  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  slides.push({image:'red'});
  slides.push({image:'blue'});
  slides.push({image:'green'});
  slides.push({image:'balloons'});
  slides.push({image:'beard'});

  var fields = $scope.fields = [title, at, "venue", "date", "time", "description", "organizer"]
  // fields.push({field: $scope.title}); 
  // fields.push({field: $scope.at});
  // fields.push({field: $scope.venue});
  // fields.push({field: $scope.date});
  // fields.push({field: $scope.time});
  // fields.push({field: $scope.description});
  // fields.push({field: $scope.organizer});

  $scope.change = function () {
    $scope.venueValue = "";
    $scope.venueSize = "";
    $scope.venueUp = "";
    $scope.venueLeft = "";
    $scope.venueColor = "";
    $scope.titleValue = "";
    $scope.titleSize = "";
    $scope.titleUp = "";
    $scope.titleLeft = "";
    $scope.titleColor = "";
    $scope.dateValue = "";
    $scope.dateSize = "";
    $scope.dateUp = "";
    $scope.dateLeft = "";
    $scope.dateColor = "";
    $scope.atValue = "";
    $scope.atSize = "";
    $scope.atUp = "";
    $scope.atLeft = "";
    $scope.atColor = "";
    $scope.timeValue = "";
    $scope.timeSize = "";
    $scope.timeUp = "";
    $scope.timeLeft = "";
    $scope.timeColor = "";
    $scope.descriptionValue = "";
    $scope.descriptionSize = "";
    $scope.descriptionUp = "";
    $scope.descriptionLeft = "";
    $scope.descriptionColor = "";
    $scope.organizerValue = "";
    $scope.organizerSize = "";
    $scope.organizerUp = "";
    $scope.organizerLeft = "";
    $scope.organizerColor = "";
  };
});

