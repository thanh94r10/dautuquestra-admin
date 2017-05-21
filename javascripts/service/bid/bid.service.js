(function () {
    'use strict';

    angular
        .module('app')
        .factory('bidService', bidService);

    bidService.$inject = ['$http'];

    function bidService($http) {
        var files = [];
        var service = {
            createBid: createBid
        };
        return service;

        ////////////////////////////

        function createBid(bid){
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/Bids/CreateBid', bid).then(successCallBack, errorCallBack);
        }

    }
})();
