(function() {
    'use strict';

    angular
        .module('app')
        .factory('detailAdvService', detailAdvService);

    detailAdvService.$inject = ['$http'];

    function detailAdvService($http) {

        var service = {
            CreateDetail : CreateDetail,
            GetDetail : GetDetail,
            SendSms : SendSms
        };

        return service;

        ////////////////////////////

        function getIndex() {

        }

        function CreateDetail(object)
        {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/DetailAdv/CreateDetail', object).then(successCallBack, errorCallBack);
        }

        function GetDetail(advertisementId)
        {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/DetailAdv/GetDetail?advertisementId=' + advertisementId).then(successCallBack, errorCallBack);
        }

        function SendSms(sms)
        {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/Advertisement/SendSMSMessage', sms).then(successCallBack, errorCallBack);
        }

    }
})();
