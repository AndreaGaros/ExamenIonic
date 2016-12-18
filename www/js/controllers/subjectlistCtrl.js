/**
 * Created by Andrea on 24/11/2016.
 */


var base_url = "http://localhost:3000";

app.controller('subjectlistCtrl', function ($scope, $http ,$rootScope, $ionicPopup, $stateParams, $state, $timeout) {
    $scope.NewSubject = {};
    $scope.SubjectError = {}



    // when landing on the page, get all user and show them
    $http.get(base_url + '/subjects')
        .success(function(data) {
            $scope.subjects = data;
            console.log($scope.subjects);

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.CreateSubject = function(){
        $http.post(base_url + '/subjects/createsubject', $scope.NewSubject)
            .success(function(data){
                $scope.NewSubject = {}; //clear the form
                $scope.subjects = data;
                $scope.SubjectError = {}

                console.log(data);
            })
            .error(function(data){
                console.log('Error:' + data);
            });
    };
/*
    $scope.DeleteSubject = function(id){
        $http.delete(base_url + '/subjects/removesubject/' + id)
            .success(function(data) {
                $scope.subjects = data;
               

            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };*/

    $scope.getTodas = function () {

        $http.get(base_url + '/subjects')
            .success(function(data) {
                $scope.subjects = data;
                console.log($scope.subjects);

            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

    }



    $scope.SearchQT = function () {
      $http.get(base_url + '/subjects/when/' + "QT")
        .success(function (data) {
          $scope.subjects = data;
          console.log(data);
        })
        .error(function (data) {
          console.log('Error: ' + data);
        });

    }

    $scope.SearchQP = function () {
      $http.get(base_url + '/subjects/when/' + "QP")
        .success(function (data) {
          $scope.subjects = data;
          console.log(data);
        })
        .error(function (data) {
          console.log('Error: ' + data);
        });

    }

});


