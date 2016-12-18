/**
 * Created by Andrea on 24/11/2016.
 */



app.controller('studentlistCtrl', function ($scope, $http ,$rootScope, $ionicPopup, $stateParams, $state, $timeout) {
    $scope.NewStudent = {};
  

    // when landing on the page, get all user and show them
    $http.get(base_url + '/students')
        .success(function(data) {
            $scope.students = data;
            console.log($scope.students);

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.CreateStudent = function(){
        $http.post( base_url+ '/students/createstudent', $scope.NewStudent)
            .success(function(data){
                $scope.NewStudent = {}; //clear the form
                $scope.students = data;
                console.log(data);
            })
            .error(function(data){
                console.log('Error:' + data);
            });
    };

    $scope.ProfileStudent = function (id) {
        $http.get('/students/id/' + id)
            .success(function (data) {
                $rootScope.student = data;
            })
            .error(function (data) {
                console.log('Error: ' +data);
            });
    };

});


