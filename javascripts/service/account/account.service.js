(function () {
    'use strict';

    angular
        .module('app')
        .factory('accountService', accountService);

    accountService.$inject = ['$http', '$state', 'utilService', 'CONSTANT'];

    function accountService($http, $state, utilService, CONSTANT) {

        var files = [];

        var service = {
            getProfile: getProfile,
            getAccountById: getAccountById,
            createAccount: createAccount,
            updateProfile: updateProfile,
            pushImage: pushImage,
            getImages: getImages,
            changePassOfUser: changePassOfUser,
            getListAdmin: getListAdmin,
            getProfileCustomer: getProfileCustomer,
            followCustomer: followCustomer,
            unFollowCustomer: unFollowCustomer,
            getProfileAdmin: getProfileAdmin
        };

        return service;

        ////////////////////////////

        function createAccount(account) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/Accounts/Create', account).then(successCallBack, errorCallBack);
        }

        function updateProfile(formData) {
            return $http.put('api/Accounts/UpdateProfile', formData, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            }).then(sucess, errorFunction);
            function sucess(response) {
                return response;
            }
            function errorFunction(error) {
                return error;
            }
        }

        function pushImage(fileModel) {
            if (checkFiles(fileModel)) {
                if (fileModel.file.name.indexOf('.jpg') === -1
                    && fileModel.file.name.indexOf('.png') === -1
                    && fileModel.file.name.indexOf('.jpeg') === -1) {
                    return false;
                }
                files[0] = fileModel;
            }
            return true;
        }

        function checkFiles(fileModel) {
            for (var i = 0; i < files.length; i++) {
                if (fileModel.file.name === files[i].file.name) {
                    return false;
                }
            }
            return true;
        }

        function getImages() {
            return files;
        }

        function getProfile() {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('/api/Accounts/GetProfile')
                .then(successCallBack, errorCallBack);
        }
        
        function getProfileAdmin(id){
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Accounts/GetProfileAdmin?id=' + id)
                .then(successCallBack, errorCallBack);
        }

        function getAccountById(id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Accounts/GetById?id=' + id)
                .then(successCallBack, errorCallBack);
        }

        function changePassOfUser(password) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/Accounts/ChangePassword', password)
                .then(successCallBack, errorCallBack);
        }

        function sendPassword(username, resetUrl) {
            return $http.post('api/Accounts/ResetPassword', bodyData).then(successCallpack, errorCallpack);

            function successCallpack(response) {
                return response;
            }

            function errorCallpack(response) {
                return response;
            }
        }

        /// amdin
        function getListAdmin() {
            function successCallBack(response) {
                var admins = [];
                angular.forEach(response.data, function (element) {
                    angular.forEach(element.Roles, function (role) {
                        if (role === 'Admin') {
                            admins.push(element);
                        }
                    });
                });
                return admins;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Accounts/GetAll')
                .then(successCallBack, errorCallBack);
        }

        function getProfileCustomer(Id) {
            function successCallBack(response) {
                if (response.data.listItems.length !== 0) {
                    angular.forEach(response.data.listItems, function (element) {
                        angular.forEach(element.Images, function (img) {
                            img.Path = CONSTANT.BASE_URL + img.Path.substr(1);
                        });
                    });
                    angular.forEach(response.data.Followers, function (follower) {
                        if(follower.Avatar == null){
                            follower.Avatar = 'style/icon/user.jpg';
                        }else{
                            follower.Avatar = CONSTANT.BASE_URL + follower.Avatar.substr(1);
                        }
                    });
                    response.data.listItems = utilService.chunk(response.data.listItems, 3);
                }
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Customers/GetCustomerProfile?customerId=' + Id)
                .then(successCallBack, errorCallBack);
        }

        function followCustomer(Id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/Customers/FollowerCustomer?IdCustomer=' + Id)
                .then(successCallBack, errorCallBack);
        }

        function unFollowCustomer(Id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/Customers/UnFollowerCustomer?IdCustomer=' + Id)
                .then(successCallBack, errorCallBack);
        }

    }
})();
