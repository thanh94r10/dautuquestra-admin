(function () {
	'use strict';
	angular
		.module('app')
		.factory('userRoleService', userRoleService);

	userRoleService.$inject = ['$localStorage', '$state', '$timeout'];

	function userRoleService($localStorage, $state, $timeout) {
		var service = {
			checkIsUser: checkIsUser,
			checkIsAdmin: checkIsAdmin
		};
		return service;

		function checkIsUser() {
			if ($localStorage.role === undefined) {
				$timeout(function () {
					$state.go('login');
				});
			}
		}

		function checkIsAdmin() {
			if ($localStorage.role === 'Student') {
				$timeout(function () {
					$state.go('start.no-permission');
				});
			}
		}
	}
})();