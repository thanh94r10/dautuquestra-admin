(function () {
    'use strict';

    angular
        .module('app')
        .factory('categoryService', categoryService);

    categoryService.$inject = ['$http'];

    function categoryService($http) {

        var service = {
            getIndex: getIndex,
            getAllCategory: getAllCategory,
            getGroupCategory: getGroupCategory,
            GetStatistical: GetStatistical,
            createCate: createCate,
            updateCate: updateCate,
            GetCategories: GetCategories
        };

        return service;

        ////////////////////////////

        function getIndex() {

        }

        function GetCategories() {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('/api/Category/GetCategories').then(successCallBack, errorCallBack);
        }

        function getAllCategory(sort, page, amount) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('/api/Category/getAllCategories?sort=' + sort + '&page=' + page + '&amount=' + amount).then(successCallBack, errorCallBack);
        }

        function getGroupCategory() {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Category/GetGroupCategory').then(successCallBack, errorCallBack);
        }

        function GetStatistical() {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Advertisement/GetStatistical').then(successCallBack, errorCallBack);
        }

        function createCate(name) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/Category/Create?name=' + name).then(successCallBack, errorCallBack);
        }

        function updateCate(id, name) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/Category/UpdateCategory?id=' + id + '&name=' + name).then(successCallBack, errorCallBack);
        }

    }
})();
