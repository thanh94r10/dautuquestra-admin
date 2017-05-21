(function () {
    'use strict';

    angular
        .module('app')
        .factory('adminService', adminService);

    adminService.$inject = ['$http', 'CONSTANT'];

    function adminService($http, CONSTANT) {
        var service = {
            getAllIncrement: getAllIncrement,
            updateIncrement: updateIncrement,
            getHomeItems: getHomeItems
        };
        return service;

        ////////////////////////////

        function getAllIncrement(sort, page, amount) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Admins/getIncrement?sort=' + sort + '&page=' + page + '&amount=' + amount).then(successCallBack, errorCallBack);
        }

        function updateIncrement(update) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/Admins/UpdateIncrement', update).then(successCallBack, errorCallBack);
        }

        function getHomeItems() {
            function successCallBack(response) {
                angular.forEach(response.data.listBidItems, function (element) {
                    angular.forEach(element.Images, function (image) {
                        image.Path = CONSTANT.BASE_URL + image.Path.substr(1);
                    });
                });
                angular.forEach(response.data.listBuyNowItems, function (element) {
                    angular.forEach(element.Images, function (image) {
                        image.Path = CONSTANT.BASE_URL + image.Path.substr(1);
                    });
                });
                angular.forEach(response.data.listNewItems, function (element) {
                    angular.forEach(element.Images, function (image) {
                        image.Path = CONSTANT.BASE_URL + image.Path.substr(1);
                    });
                });
                angular.forEach(response.data.listCateItems, function (element) {
                    angular.forEach(element.listItems, function (item) {
                        angular.forEach(item.Images, function (image) {
                            image.Path = CONSTANT.BASE_URL + image.Path.substr(1);
                        });
                    });
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/ItemSells/getHomeItems').then(successCallBack, errorCallBack);
        }

    }
})();
