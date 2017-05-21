(function () {
    'use strict';

    angular
        .module('app')
        .factory('messageCustomerService', messageCustomerService);

    messageCustomerService.$inject = ['$http'];

    function messageCustomerService($http) {
        var files = [];
        var service = {
            sendMessage: sendMessage,
            getUserMessageReceive: getUserMessageReceive,
            getUserMessageSend: getUserMessageSend,
            readedMess : readedMess,
            getMessNotis : getMessNotis
        };
        return service;

        ////////////////////////////

        function sendMessage(formData) {
            return $http.post('api/CustomerMessages/SendMessage', formData, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).then(sucessCallback, errorCallBack);
            function sucessCallback(response) {
                return response;
            }
            function errorCallBack(error) {
                return error;
            }
        }

        function getUserMessageReceive(userId, sort, page, amount) {
            if(sort == undefined){
                sort = 'messtime_desc';
            }
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/CustomerMessages/getUsersMessageReceiver?userId=' + userId + '&sort=' + sort + 
            '&page=' + page + '&amount=' + amount).then(successCallBack, errorCallBack);
        }

        function getUserMessageSend(userId, sort, page, amount) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/CustomerMessages/getUsersMessageSend?userId=' + userId + '&sort=' + sort + 
            '&page=' + page + '&amount=' + amount).then(successCallBack, errorCallBack);
        }

        function getMessNotis(userId) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/CustomerMessages/getMessNotis?userId=' + userId).then(successCallBack, errorCallBack);
        }

        function readedMess(IdMess){
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/CustomerMessages/ReadedMesage?idMessage=' + IdMess).then(successCallBack, errorCallBack);
        }

    }
})();
