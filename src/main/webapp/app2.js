/**
 * Created by souvikda on 10/25/2016.
 */
angular.module("myApp", [])
var app = angular.module('myApp', []);
app.controller("myCtrl", function($scope,$location) {

    var init = function (){
        var loc=$location.absUrl();

        $scope.message=loc;


        var fn1=$location.search()['fname']
        $scope.fn=fn1;
        var ln1=$location.search()['lname']
        $scope.ln=ln1;
        $scope.emp_id=$location.search()['empId']
        $scope.email=$location.search()['emailId']

    }
    init();
    $scope.show = function () {
        var loc=$location.absUrl();

        $scope.message=loc+"#/?fname="+$scope.fn+"&lname="+$scope.ln+"&empId="+$scope.emp_id+"&emailId="+$scope.email;

    }
});