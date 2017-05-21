(function () {
    angular.module('app')
        .controller('loginPageController', loginPageController);

    loginPageController.$inject = ['$location', 'authenticationService', '$localStorage', '$state', '$scope', '$window', '$timeout', 'CONSTANT', 'accountService'];


    function loginPageController($location, authenticationService, $localStorage,
        $state, $scope, $window, $timeout, CONSTANT, accountService) {
        var vm = this;
        vm.username = '';
        vm.password = '';
        vm.warning = {};
        vm.login = login;

        function login() {
            var data = {
                username: vm.username,
                password: vm.password,
                grant_type: 'password'
            };

            authenticationService.getToken(data).then(function (res) {
                
                if (res.status === 200) {
                    $localStorage.token = res.data;
                    console.log(res);
                    getProfile();
                    $state.go('start');
                } else if (res.status === 400) {
                    vm.message = res.data.error_description;
                    vm.warning = {
                        color: 'red'
                    };
                }
            });
        }

        function getProfile() {
            function successCallback(response) {
                if (response.status === 200) {
                    if (response.data.FirstName === null || response.data.LastName === null) {
                        $localStorage.userFullName = response.data.UserName;
                    } else {
                        $localStorage.userFullName = response.data.LastName + ' ' + response.data.FirstName;
                    }
                    vm.role = response.data.Roles[0];
                    vm.userId = response.data.Id;
                    // getNotification(vm.userId);
                    vm.FullName = $localStorage.userFullName;
                    $localStorage.FirstName = response.data.FirstName;
                    $localStorage.LastName = response.data.LastName;
                    $localStorage.PhoneNumber = response.data.PhoneNumber;
                    $localStorage.Email = response.data.Email;
                    $localStorage.id = response.data.Id;
                    $localStorage.UserName = response.data.UserName;
                    $localStorage.Address = response.data.Address;
                    // set avatar
                    if (response.data.Avatar === null) {
                        $localStorage.avatar = 'style/icon/logo.png';
                    } else {
                        $localStorage.avatar = CONSTANT.BASE_URL + response.data.Avatar.substr(1);
                    }
                }
            }
            function errorCallback(response) {
                console.log('get role fail: ' + response);
            }
            accountService.getProfile().then(successCallback, errorCallback);
        }
    }
})();
