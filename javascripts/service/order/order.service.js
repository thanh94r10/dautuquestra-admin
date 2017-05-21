(function () {
    'use strict';

    angular
        .module('app')
        .factory('orderService', orderService);

    orderService.$inject = ['$http', 'CONSTANT'];

    function orderService($http, CONSTANT) {
        var service = {
            createOrder: createOrder,
            getBuyerOrders: getBuyerOrders,
            CancelOrder: CancelOrder,
            getSellerOrders: getSellerOrders,
            UpdateOrder: UpdateOrder,
            getOrderById: getOrderById
        };
        return service;

        ////////////////////////////

        function createOrder(order) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/Order/CreateOrder', order).then(successCallBack, errorCallBack);
        }



        function getBuyerOrders(id, field, page, amount) {
            if (field === undefined) {
                field = 'orderDate';
            }
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Order/getBuyerOrders?userId=' + id + '&sort=' + field + '&page=' + page + '&amount=' + amount).then(successCallBack, errorCallBack);
        }

        function CancelOrder(idOrder, idAdv) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/Advertisement/CancelOrder?idOrder=' + idOrder + '&idAvertisement=' + idAdv).then(successCallBack, errorCallBack);
        }

        function getSellerOrders(id, field, page, amount) {
            if (field === undefined) {
                field = 'orderDate';
            }
            function successCallBack(response) {
                angular.forEach(response.data.Data, function (element) {
                    element = convertStatus(element);
                    element.image = CONSTANT.BASE_URL + element.image.substr(1);
                });
                console.log(response);
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Order/getSellerOrders?userId=' + id + '&sort=' + field + '&page=' + page + '&amount=' + amount).then(successCallBack, errorCallBack);
        }

        function UpdateOrder(orderId, result) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/Order/UpdateOrder?orderId=' + orderId + '&result=' + result).then(successCallBack, errorCallBack);
        }

        function getOrderById(id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Order/getOrderById?id=' + id).then(successCallBack, errorCallBack);
        }

        function convertStatus(order) {
        var result = order;
        switch (order.Result) {
            case 0:
                result.progress = 25;
                result.progressTitle = "Người mua chưa thanh toán";
                break;
            case 1:
                result.progress = 50;
                result.progressTitle = "Người mua đã thanh toán";
                break;
            case 2:
                result.progress = 75;
                result.progressTitle = "Đã chuyển hàng";
                break;
            case 3:
                result.progress = 100;
                result.progressTitle = "Người mua đã nhận hàng";
                break;
            case -1:
                result.progress = 0;
                result.progressTitle = "Đơn hàng bị hủy";
                break;
        }
        return result;
    }

    }
})();
