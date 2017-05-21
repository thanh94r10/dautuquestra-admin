(function () {
    'use strict';

    angular
        .module('app')
        .factory('statisticService', statisticService);

    statisticService.$inject = ['$http'];

    function statisticService($http) {
        var files = [];
        var service = {
            getStatistic: getStatistic
        };
        return service;

        ////////////////////////////

        function getStatistic(year) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Admins/GetStatistical?year=' + year).then(successCallBack, errorCallBack);
        }

    }
})();
