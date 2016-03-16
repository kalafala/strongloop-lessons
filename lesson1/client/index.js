// Credit https://www.youtube.com/watch?v=hThmoKA9aeU&index=24&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl#t=189.23102

var app = angular.module("myModule", ["ngRoute"])
	.config(function($routeProvider) {
		$routeProvider
				.when("/home", {
						templateUrl:"Home.html",
						controller:"homeController"
						})
				.when("/employees", {
						templateUrl: "Employees.html",
						controller:"employeesController"
				})
	})
	.controller("homeController", function($scope) {
			$scope.message = "Welcome Kerim";	
	})
	.controller("employeesController", function($scope, $http, $log) {
		$http({
                                method: "GET",
                                url: "http://localhost:3000/api/Employees"})
                .then(function (response) {
				//var solution=new Array();
        			//for (i=0;i<response.data.length;i++) {
                		//	solution.push(response.data[i].name);
        			//}
                                //$scope.employees=solution;
				$scope.employees=response.data;
                                $log.info(response);
				$log.info("New code being called");
                }, function(reason) {
                        $scope.error = reason.data;
                        $log.info(reason);
                }
                );

	});
