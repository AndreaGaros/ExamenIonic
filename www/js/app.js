// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var base_url = "http://localhost:3000";


var app = angular.module('starter', ['ionic']);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.subjectlist', {
      cache: false,
      url: '/subjectlist',
      views: {
        'menuContent': {
          templateUrl: 'templates/subjectlist.html',
          controller: 'subjectlistCtrl'
        }
      }
    })
    .state('app.subjectprofile', {
      cache: false,
      url: '/subjectprofile/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/subjectprofile.html',
          controller: 'subjectprofileCtrl'
        }
      }
    })
    .state('app.studentlist', {
      cache: false,
      url: '/studentlist',
      views: {
        'menuContent': {
          templateUrl: 'templates/studentlist.html',
          controller: 'studentlistCtrl'
        }
      }
    })
    .state('app.studentprofile', {
      cache: false,
      url: '/studentprofile/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/studentprofile.html',
          controller: 'studentprofileCtrl'
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/subjectlist');
});

