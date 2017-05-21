(function () {
    'use strict';

    angular
        .module('app')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$http', '$localStorage', '$httpParamSerializerJQLike', '$state', '$timeout'];

    function authenticationService($http, $localStorage, $httpParamSerializerJQLike, $state, $timeout) {

        var service = {
            getToken: getToken,
            checkAuthentication: checkAuthentication,
            checkUnAuthentication: checkUnAuthentication
        };

        return service;

        ////////////////////////////



        function getToken(data) {
            function successCallback(response) {
                return response;
            }
            function errorCallback(response) {
                return response;
            }
            return $http.post('/api/Accounts/token', $httpParamSerializerJQLike(data)).then(successCallback, errorCallback);
        }

        function checkAuthentication() {
            if (!$localStorage.token) {
                $timeout(function () {
                    $state.go('login');
                });

            }
        }

        function checkUnAuthentication() {
            if ($localStorage.token) {
                $timeout(function () {
                    // $state.go('admin');
                });
            }
        }
    }
})();
