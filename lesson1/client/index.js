// Credit https://www.youtube.com/watch?v=hThmoKA9aeU&index=24&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl#t=189.23102

var app = angular.module("myModule", ["ui.router", "lbServices", "ngMaterial"])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
				.state("home", {
						url: '/home',
						templateUrl:"Home.html",
						controller:"homeController"
						})
				.state("employees", {
						url: '/employees',
						templateUrl: "Employees.html",
						controller:"employeesController"
				})
	})
	.controller("tabController", function($scope, $location) {
		$scope.selectedIndex = 0;

        	$scope.$watch('selectedIndex', function(current, old) {
            	switch (current) {
                case 0:
                    $location.url("/home");
                    break;
                case 1:
                    $location.url("/employees");
                    break;
            	}	
        	});
	})
	.controller("homeController", function($scope) {
			$scope.message = "Welcome Kerim";	
	})
	.controller("employeesController", function($scope, $http, $log,Employees) {
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

               $scope.strongLoopResult = Employees.find();
	       $scope.strongLoopResult2 = Employees.find({
			filter: {where: {salary: {lt: 1000}}}});
		$scope.strongLoopResult3 = Employees.find({
			filter: {fields: {name: true,salary:false}}});
		//Employees.create({name: "Richard", salary: 5, dateOfBirth: "Jan 1, 2000", gender: "Male" }); 
		//Employees.create({name: 'Richard', dateofbirth: "whatever", gender: "Male", "salary": 0 }, function(obj1, obj2) {console.log("success!")}, function(err) {console.log(err);}); 
		Employees.upsert({name: 'Richard', dateofbirth: "whatever", gender: "Male", "salary": 0 }, function(obj1, obj2) {console.log("success!")}, function(err) {console.log(err);}); 

	});
