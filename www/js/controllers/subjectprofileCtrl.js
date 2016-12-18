/**
 * Created by Andrea on 24/11/2016.
 */



app.controller('subjectprofileCtrl', function ($scope, $http ,$rootScope, $ionicPopup, $stateParams, $state, $timeout) {

    var sub_id = window.location.href.split("/").pop();


    $http.get(base_url + '/subjects/id/' + sub_id )
        .success(function (data) {
            $scope.subject = data;
            $scope.subjectstudents= data.students;
            $rootScope.counter =  $scope.subjectstudents.length;
            console.log($scope.subjectstudents)

        })
        .error(function (data) {
            console.log('Error: ' +data);
        });

    $http.get(base_url + '/students')
        .success(function(data) {
            $scope.students = data;
            console.log($scope.students);

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


    $scope.Addstudent = function (id) {
        $scope.AddStudent = {
            student_id: id
        };
        $http.post(base_url + '/subjects/addstudent/' + sub_id , $scope.AddStudent)
            .success(function(data){
                $scope.subject = data;
                $scope.subjectstudents= data.students;
                $scope.counter =  $scope.subjectstudents.length;
                console.log($scope.counter);
            })
            .error(function(data){
                console.log('Error:' + data);
            });
    };

    $scope.Popstudent = function (id) {
        $http.delete(base_url + '/subjects/deletestudent/' + sub_id +'/'+ id)
            .success(function(data){
                $scope.subject = data;
                $scope.subjectstudents= data.students;
                $scope.counter =  $scope.subjectstudents.length;
            })
            .error(function(data){
                console.log('Error:' + data);
            });
    };

    $scope.DeleteSubject = function(id){
      $http.delete(base_url + '/subjects/removesubject/' + id)
        .success(function(data) {
          $scope.subjects = data;
          $state.go("app.subjectlist");

        })
        .error(function(data) {
          console.log('Error:' + data);
        });
    };



});
