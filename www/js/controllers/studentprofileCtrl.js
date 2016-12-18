/**
 * Created by Andrea on 24/11/2016.
 */




app.controller('studentprofileCtrl', function ($scope, $http ,$rootScope, $ionicPopup, $stateParams, $state, $timeout) {

    var id = window.location.href.split("/").pop();
    console.log(id);
    $scope.phone = {};

    $http.get(base_url + '/students/id/' + id)
        .success(function(data) {
            $scope.student = data;
            $scope.phones = data.phones;
            console.log("holaaaa",  $scope.phones);
            $scope.phonecont = $scope.phones.length;
            console.log("contadooor: " +  $scope.phonecont);

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.AddPhn = function () {
        $http.post(base_url + '/students/addphone/' + id, $scope.phone)
            .success(function(data){
                $scope.phone ={};
                $scope.student = data;
                $scope.phones = data.phones;
               ;
            })
            .error(function(data){
                console.log('Error:' + data);
            });
    };

    $scope.DeletePhn = function (phone) {
        $http.delete(base_url + '/students/deletephone/' + id +'/' + phone)
            .success(function(data){
                $scope.student = data;
                $scope.phones = data.phones;
            })
            .error(function(data){
                console.log('Error:' + data);
            });
    };

    $scope.DeleteStudent = function(id){
      $http.delete(base_url + '/students/removestudent/' + id)
        .success(function(data) {
          $scope.students = data;
          $state.go("app.studentlist");

        })
        .error(function(data) {
          console.log('Error:' + data);
        });
    };

});
