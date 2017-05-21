(function() {
    'use strict';

    angular
        .module('app')
        .factory('userService', userService);

    userService.$inject = ['$http', 'CONSTANT'];

    function userService($http, CONSTANT) {

        var service = {
            getIndex: getIndex,
            registerUser: registerUser,
            uploadRequest: uploadRequest,
            getAllCustomer: getAllCustomer
        };

        return service;

        ////////////////////////////

        function getIndex() {

        }

        function registerUser(user)
        {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('http://localhost:17453/api/Users/Create', user).then(successCallBack, errorCallBack);
        }

        function uploadRequest(request)
        {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('http://localhost:17453/api/Users/MakeRequest', request).then(successCallBack, errorCallBack);
        }

        function getAllCustomer(sort, page, amount, searchText){
            if(searchText === undefined){
                searchText = '';
            }
            function successCallBack(response) {
                angular.forEach(response.data.Data, function(element){
                    element.Avatar =  element.Avatar == null ? 'style/icon/user.jpg' : CONSTANT.BASE_URL + element.Avatar.substr(1); 
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Customers/Get?sort=' + sort + '&page=' + page + '&amount=' + amount + '&searchText=' + searchText).then(successCallBack, errorCallBack);
        }

    }
})();
