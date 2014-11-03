// Application(S)
var app = angular.module('userListApp', ['userListApp.controller']);
// Application(E)

// APP controller(S)
var appCtrl = angular.module('userListApp.controller', ['userListApp.service']);
appCtrl.controller('userListCtrl', ['$scope','userService', function($scope, userService){
	$scope.IUFlag = {};	// I : insert , U : update
	
	// 사용자 list(S) - 재사용성을 위해 함수화
	$scope.userListQuery = function(){
		var userPromise = userService.query();
		userPromise.success(function(data){
			$scope.userList = data;
		});
	};
	$scope.userListQuery();
	// 사용자 list(E)
	
	// 사용자 select(S)
	$scope.userShow = function(){
		var userPromise = userService.show(this.user.usrId);
		userPromise.success(function(data){
			$scope.user = data;
			$scope.IUFlag = "U";
		});
	};
	// 사용자 select(S)
	
	// 사용자 초기화(S)
	$scope.userReset = function(){
		$scope.user = {};
		$scope.IUFlag = "I";
	};
	// 사용자 초기화(E)
	
	// 사용자 insert(S)
	$scope.userCreate = function(){
		var userPromise = userService.create($scope.user);
		userPromise.success(function(data){
			alert("사용자가 추가되었습니다.");
			$scope.userListQuery();
			$scope.IUFlag = "U";
		});
		userPromise.error(function(){
			alert("사용자 추가중 문제가 발생하였습니다.");
		});
	};
	// 사용자 insert(E)
	
	// 사용자 update(S)
	$scope.userUpdate = function(){
		var userPromise = userService.update($scope.user);
		userPromise.success(function(data){
			alert("사용자가 수정되었습니다.");
			$scope.userListQuery();
			$scope.IUFlag = "U";
		});
		userPromise.error(function(){
			alert("사용자 수정중 문제가 발생하였습니다.");
		});
	}
	// 사용자 update(E)
	
	// 사용자 delete(S)
	$scope.userDelete = function(){
		var userPromise = userService.remove(this.user.usrId);
		userPromise.success(function(data){
			alert("사용자가 삭제되었습니다.");
			$scope.userListQuery();
			$scope.IUFlag = "I";
			$scope.user = {};
		});
		userPromise.error(function(){
			alert("사용자 삭제중 문제가 발생하였습니다.");
		});
	}
	// 사용자 delete(E)
	
}]);
// APP controller(E)

// APP service(S)
var appSvc = angular.module('userListApp.service', ['ngResource']);
appSvc.factory('userService', ['$http','$resource', function($http, $resource){
	var dataFactory = {};
	var config = {
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
	};
	dataFactory.query = function(){
		return $http.get('/userManage/user');
	};

	dataFactory.create = function(data){
		return $http.post('/userManage/user', $.param(data), config);
	};
	
	dataFactory.show = function(usrId){
		return $http.get('/userManage/user/' + usrId);
	};
	
	dataFactory.update = function(data){
		return $http.put('/userManage/user', $.param(data), config);
	};
	
	dataFactory.remove = function(usrId){
		return $http.delete('/userManage/user/' + usrId);
	}

	return dataFactory;
}]);
// APP service(E)
