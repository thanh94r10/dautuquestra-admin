(function () {
    'use strict';

    angular
        .module('app')
        .factory('ratingService', ratingService);

    ratingService.$inject = ['$http'];

    function ratingService($http) {
        var files = [];
        var service = {
            createRatingSeller: createRatingSeller
        };
        return service;

        ////////////////////////////

        function createRatingSeller(rating) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/RateSellers/CreateRateSeller', rating)
                .then(successCallBack, errorCallBack);
        }

        

    }
})();
