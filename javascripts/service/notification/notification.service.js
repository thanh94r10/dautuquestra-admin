(function () {
    'use strict';

    angular
        .module('app')
        .factory('notificationService', notificationService);

    notificationService.$inject = ['$http', 'CONSTANT'];

    function notificationService($http, CONSTANT) {

        var service = {
            getIndex: getIndex,
            getListNotification: getListNotification,
            getAllNotification: getAllNotification,
            UserReaded: UserReaded,
            ReadAll: ReadAll
        };

        return service;

        ////////////////////////////

        function getIndex() {

        }

        function getListNotification(userId, sort, page, amount) {
            if(sort == undefined){
                sort = 'notitime_desc';
            }
            function successCallBack(response) {
                angular.forEach(response.data.Data, function(element){
                    element.imageItem = CONSTANT.BASE_URL + element.imageItem.substr(1);
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Notification/GetNotiOfUser?userId=' + userId + 
            '&sort=' + sort + '&page=' + page + '&amount=' + amount).then(successCallBack, errorCallBack);
        }

        function getAllNotification(userId) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Notification/GetAllNotification?userId=' + userId).then(successCallBack, errorCallBack);
        }

        function UserReaded(notiId) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('http://localhost:17453/api/Notification/UserReaded?notiId=' + notiId).then(successCallBack, errorCallBack);
        }

        function ReadAll() {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('http://localhost:17453/api/Notification/ReadAll').then(successCallBack, errorCallBack);
        }

    }
})();
