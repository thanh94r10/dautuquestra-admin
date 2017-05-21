(function () {
    'use strict';

    angular
        .module('app')
        .factory('itemService', itemService);

    itemService.$inject = ['$http'];

    function itemService($http) {
        var service = {
            getItemOfCategory: getItemOfCategory,
            getItemById: getItemById,
            createItemSell: createItemSell,
            updateExpriedAd: updateExpriedAd,
            getUserItems: getUserItems,
            updateItemSell: updateItemSell,
            searchItem: searchItem,
            getBrandItems : getBrandItems,
            getUserItemsSell : getUserItemsSell,
            getFavorItems : getFavorItems,
            addLoveProduct : addLoveProduct,
            removeLoveProduct : removeLoveProduct,
            listItemsByType : listItemsByType,
            getListSuggest: getListSuggest
        };
        return service;

        ////////////////////////////

        function getItemOfCategory(cateId, type, sort, page, amount) {
            if (type === undefined) {
                type = 2;
            }
            function successCallBack(response) {
                angular.forEach(response.data.Data, function (element) {
                    if (element.CustomerSell.avatar === null) {
                        element.CustomerSell.avatar = 'style/icon/user.jpg';
                    } else {
                        element.CustomerSell.avatar = 'http://localhost:17453' + element.CustomerSell.avatar.substr(1);
                    }
                    angular.forEach(element.Images, function (image) {
                        image.Path = 'http://localhost:17453' + image.Path.substr(1);
                    });
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/itemsells/GetItemSellOfCate?cateId=' + cateId + '&type=' + type + '&sort=' + sort + '&page=' + page + '&amount=' + amount)
                .then(successCallBack, errorCallBack);
        }

        function listItemsByType(type, sort, page, amount) {
            if (type === undefined) {
                type = 2;
            }
            function successCallBack(response) {
                angular.forEach(response.data.Data, function (element) {
                    if (element.CustomerSell.avatar === null) {
                        element.CustomerSell.avatar = 'style/icon/user.jpg';
                    } else {
                        element.CustomerSell.avatar = 'http://localhost:17453' + element.CustomerSell.avatar.substr(1);
                    }
                    angular.forEach(element.Images, function (image) {
                        image.Path = 'http://localhost:17453' + image.Path.substr(1);
                    });
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/itemsells/getTypeItems?type=' + type + '&sort=' + sort + '&page=' + page + '&amount=' + amount)
                .then(successCallBack, errorCallBack);
        }

        function getUserItems(IdUser, type, sort, page, amount) {
            if (type === undefined) {
                type = 2;
            }
            function successCallBack(response) {
                angular.forEach(response.data.Data, function (element) {
                    if (element.CustomerSell.avatar === null) {
                        element.CustomerSell.avatar = 'style/icon/user.jpg';
                    } else {
                        element.CustomerSell.avatar = 'http://localhost:17453' + element.CustomerSell.avatar.substr(1);
                    }
                    angular.forEach(element.Images, function (image) {
                        image.Path = 'http://localhost:17453' + image.Path.substr(1);
                    });
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/itemsells/getUserItems?IdUser=' + IdUser + '&type=' + type + '&sort=' + sort + '&page=' + page + '&amount=' + amount)
                .then(successCallBack, errorCallBack);
        }

        function getUserItemsSell(IdUser, type, sort, page, amount) {
            if (type === undefined) {
                type = 2;
            }
            console.log(sort + " " + page + " " + amount);
            function successCallBack(response) {
                angular.forEach(response.data.Data, function (element) {
                    if (element.CustomerSell.avatar === null) {
                        element.CustomerSell.avatar = 'style/icon/user.jpg';
                    } else {
                        element.CustomerSell.avatar = 'http://localhost:17453' + element.CustomerSell.avatar.substr(1);
                    }
                    angular.forEach(element.Images, function (image) {
                        image.Path = 'http://localhost:17453' + image.Path.substr(1);
                    });
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/itemsells/getUserItemsSell?IdUser=' + IdUser + '&type=' + type + '&sort=' + sort + '&page=' + page + '&amount=' + amount)
                .then(successCallBack, errorCallBack);
        }

        function getFavorItems(IdUser, page, amount) {
            function successCallBack(response) {
                angular.forEach(response.data.Data, function (element) {
                    if (element.CustomerSell.avatar === null) {
                        element.CustomerSell.avatar = 'style/icon/user.jpg';
                    } else {
                        element.CustomerSell.avatar = 'http://localhost:17453' + element.CustomerSell.avatar.substr(1);
                    }
                    angular.forEach(element.Images, function (image) {
                        image.Path = 'http://localhost:17453' + image.Path.substr(1);
                    });
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/customers/GetFavoriteItemsUser?userId=' + IdUser + '&page=' + page + '&amount=' + amount)
                .then(successCallBack, errorCallBack);
        }

        function getBrandItems(brand, type, sort, page, amount) {
            if (type === undefined) {
                type = 2;
            }
            function successCallBack(response) {
                angular.forEach(response.data.Data, function (element) {
                    if (element.CustomerSell.avatar === null) {
                        element.CustomerSell.avatar = 'style/icon/user.jpg';
                    } else {
                        element.CustomerSell.avatar = 'http://localhost:17453' + element.CustomerSell.avatar.substr(1);
                    }
                    angular.forEach(element.Images, function (image) {
                        image.Path = 'http://localhost:17453' + image.Path.substr(1);
                    });
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/itemsells/getBrandItems?brand=' + brand + '&type=' + type + '&sort=' + sort + '&page=' + page + '&amount=' + amount)
                .then(successCallBack, errorCallBack);
        }

        function getListSuggest(itemId) {
            function successCallBack(response) {
                angular.forEach(response.data, function (element) {
                    if (element.CustomerSell.avatar === null) {
                        element.CustomerSell.avatar = 'style/icon/user.jpg';
                    } else {
                        element.CustomerSell.avatar = 'http://localhost:17453' + element.CustomerSell.avatar.substr(1);
                    }
                    angular.forEach(element.Images, function (image) {
                        image.Path = 'http://localhost:17453' + image.Path.substr(1);
                    });
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/itemsells/getSuggestItems?itemId=' + itemId)
                .then(successCallBack, errorCallBack);
        }

        function getItemById(id) {
            function successCallBack(response) {
                switch (response.data.state) {
                    case 1:
                        response.data.state = 'Mới 100%';
                        break;
                    case 2:
                        response.data.state = 'Mới 80% - 90%';
                        break;
                    case 3:
                        response.data.state = 'Mới dưới 80%';
                        break;
                    case 4:
                        response.data.state = 'Hư hỏng';
                        break;
                }
                angular.forEach(response.data.Images, function (element) {
                    element.Path = 'http://localhost:17453' + element.Path.substr(1);
                });
                
                response.data.nextBid = response.data.nextBid.toFixed(2);

                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/itemsells/GetItemSellById?id=' + id)
                .then(successCallBack, errorCallBack);
        }

        function createItemSell(item) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                console.log(response);
                return response;
            }
            return $http.post('api/itemsells/CreateItemSell', item)
                .then(successCallBack, errorCallBack);
        }

        function addLoveProduct(favor) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/customers/AddFavor', favor)
                .then(successCallBack, errorCallBack);
        }

        function removeLoveProduct(userId, itemId){
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/customers/RemoveFavor?userId=' + userId + '&itemId=' + itemId)
                .then(successCallBack, errorCallBack);
        }

        function updateExpriedAd(id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                console.log(response);
                return response;
            }
            return $http.put('api/itemsells/updateExpriedAd?id=' + id)
                .then(successCallBack, errorCallBack);
        }

        function convertItem(response) {
            angular.forEach(response.data.Data, function (element) {
                if (element.wayToSell === 1) {
                    element.wayToSell = 'Bán đấu giá';
                    element.priceBuyNow = 'Không';
                } else {
                    element.wayToSell = 'Mua ngay';
                    element.timeEndSell = 'Không';
                    element.minPrice = 'Không';
                }

                if (element.expried === true) {
                    element.expried = 'Đã kết thúc';
                } else {
                    element.expried = 'Đang bán';
                }

                angular.forEach(element.Images, function (image) {
                    image.Path = 'http://localhost:17453' + image.Path.substr(1);
                });
            });

            return response;
        }

        function updateItemSell(item) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/itemsells/UpdateItemSell', item)
                .then(successCallBack, errorCallBack);
        }

        function searchItem(keyword, type, sort, page, amount) {
            if (type === undefined) {
                type = -1;
            }
            function successCallBack(response) {
                angular.forEach(response.data.Data, function (element) {
                    if (element.CustomerSell.avatar === null) {
                        element.CustomerSell.avatar = 'style/icon/user.jpg';
                    } else {
                        element.CustomerSell.avatar = 'http://localhost:17453' + element.CustomerSell.avatar.substr(1);
                    }
                    angular.forEach(element.Images, function (image) {
                        image.Path = 'http://localhost:17453' + image.Path.substr(1);
                    });
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/itemsells/searchItems?keyword=' + keyword + '&type=' + type+ '&sort=' + sort + '&page=' + page + '&amount=' + amount)
                .then(successCallBack, errorCallBack);
        }

    }
})();
