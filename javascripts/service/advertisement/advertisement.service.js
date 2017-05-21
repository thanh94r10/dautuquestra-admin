(function () {
    'use strict';

    angular
        .module('app')
        .factory('advertisementService', advertisementService);

    advertisementService.$inject = ['$http'];

    function advertisementService($http) {

        var service = {
            createAdvertisement: createAdvertisement,
            upItemSell: upItemSell,
            homePage: homePage,
            getAdsOfCate: getAdsOfCate,
            upAdvertisement: upAdvertisement,
            getAdvertisementById: getAdvertisementById,
            getListSameAd: getListSameAd,
            AddressDefault: AddressDefault,
            GetListAdOfUser: GetListAdOfUser,
            SearchAds: SearchAds,
            SendMail: SendMail,
            ShareMail: ShareMail,
            getAdsByAddress: getAdsByAddress,
            SoldAd: SoldAd,
            CancelSale: CancelSale,
            DeleteAd: DeleteAd,
            getListAdApprove: getListAdApprove,
            AppoveAd: AppoveAd,
            GetListApproveByAdmin: GetListApproveByAdmin,
            getAllAdvertisement: getAllAdvertisement,
            SendMailOrderer: SendMailOrderer,
            updateAd: updateAd
        };

        return service;

        ////////////////////////////

        function createAdvertisement(formData) {
            return $http.post('api/Advertisement/CreateAdvertisement', formData, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).then(sucessCallback, errorCallBack);
            function sucessCallback(response) {
                return response;
            }
            function errorCallBack(error) {
                console.log(error);
                return error;
            }
        }

        function homePage() {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Advertisement/HomePage').then(successCallBack, errorCallBack);
        }

        function getAdsOfCate(idCategory, type, sort, page, amount) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Advertisement/GetAdvertisementOfCate?cateId=' + idCategory + '&type=' + type +
                '&sort=' + sort + '&page=' + page + '&amount=' + amount)
                .then(successCallBack, errorCallBack);
        }

        function upAdvertisement(formData) {
            return $http.post('api/Advertisement/CreateAdvertisement', formData, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).then(sucessCallback, errorCallBack);
            function sucessCallback(response) {
                return response;
            }
            function errorCallBack(error) {
                console.log(error);
                return error;
            }
        }

        function upItemSell(formData) {
            return $http.post('api/ItemSells/CreateItemSell', formData, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).then(sucessCallback, errorCallBack);
            function sucessCallback(response) {
                return response;
            }
            function errorCallBack(error) {
                console.log(error);
                return error;
            }
        }

        function getAdvertisementById(id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Advertisement/getAdvertisementById?id=' + id).then(successCallBack, errorCallBack);
        }

        function updateAd(advertisement) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/Advertisement/UpdateAdvertisement', advertisement).then(successCallBack, errorCallBack);
        }

        function getListSameAd(adId) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Advertisement/GetSameAdvertisementOfCate?adId=' + adId).then(successCallBack, errorCallBack);
        }

        function AddressDefault() {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Address/AddressDefault').then(successCallBack, errorCallBack);
        }

        function GetListAdOfUser(userId, sort, page, amount) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Advertisement/GetListAdOfUser?userId=' + userId 
            + '&sort=' + sort + '&page=' + page + '&amount=' + amount).then(successCallBack, errorCallBack);
        }

        function SearchAds(model) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/Advertisement/SearchAdvertisement', model).then(successCallBack, errorCallBack);
        }

        function SendMailOrderer(mail) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/Advertisement/SendMailOrderer', mail).then(successCallBack, errorCallBack);
        }

        function SendMail(mail) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/ItemSells/SendMailForUser', mail).then(successCallBack, errorCallBack);
        }

        function ShareMail(mail) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/ItemSells/ShareAdvertisement', mail).then(successCallBack, errorCallBack);
        }

        function getAdsByAddress(city, district, page, amount) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Advertisement/GetAdversByAddress?city=' + city + '&district=' + district + '&page=' + page + '&amount=' + amount).then(successCallBack, errorCallBack);
        }

        function SoldAd(id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/Advertisement/Sold?advertisementId=' + id).then(successCallBack, errorCallBack);
        }
        function CancelSale(id, status) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/Advertisement/CancelSaling?advertisementId=' + id + '&status=' + status).then(successCallBack, errorCallBack);
        }
        function DeleteAd(id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.delete('api/Advertisement/ShareAdvertisement', mail).then(successCallBack, errorCallBack);
        }

        function getListAdApprove() {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Advertisement/GetApproveListAd').then(successCallBack, errorCallBack);
        }

        function AppoveAd(id, approve) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/Advertisement/Approve?advertisementId=' + id + '&approve=' + approve)
                .then(successCallBack, errorCallBack);
        }

        function GetListApproveByAdmin(idAdmin) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Advertisement/GetListApproveByAdmin?idAdmin=' + idAdmin).then(successCallBack, errorCallBack);
        }

        function getAllAdvertisement(page, amount) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Advertisement/Get?page=' + page + '&amount=' + amount).then(successCallBack, errorCallBack);
        }

    }
})();
