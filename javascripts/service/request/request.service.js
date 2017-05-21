(function () {
    'use strict';

    angular
        .module('app')
        .factory('requestService', requestService);

    requestService.$inject = ['$http'];

    function requestService($http) {

        var service = {
            getIndex: getIndex,
            GetAllRequest: GetAllRequest,
            uploadRequest: uploadRequest,
            getListAdvMatchRequest: getListAdvMatchRequest,
            GetRequestUser : GetRequestUser,
            CancelReq : CancelReq,
            GetRequestApprove : GetRequestApprove,
            ApproveRequest : ApproveRequest
        };

        return service;

        ////////////////////////////

        function getIndex() {

        }

        function GetAllRequest(id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Request/GetAllRequest').then(successCallBack, errorCallBack);
        }

        function uploadRequest(request) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/Users/MakeRequest', request).then(successCallBack, errorCallBack);
        }

        function getListAdvMatchRequest(id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Users/GetListAdvMatchRequest?requsetId=' + id).then(successCallBack, errorCallBack);
        }

        function GetRequestUser(id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Request/GetRequestOfUser?idUser=' + id).then(successCallBack, errorCallBack);
        }

        function CancelReq(id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/Request/CancelRequest?requestId=' + id).then(successCallBack, errorCallBack);
        }

        function GetRequestApprove() {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Request/GetRequestApprove').then(successCallBack, errorCallBack);
        }

        function ApproveRequest(id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/Request/Approve?requestId=' + id).then(successCallBack, errorCallBack);
        }

    }
})();
