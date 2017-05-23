(function () {
    angular
        .module('app')
        .controller('CoreController', CoreController);

    CoreController.$inject = ['$http', '$scope', 'authenticationService', 'accountService',
        'categoryService', '$state', '$localStorage',
        'notificationService', '$timeout', '$interval', '$window', 'itemService', 'CONSTANT',
        'messageCustomerService', '$location', 'statisticService', 'adminService'];

    /* @ngInject */
    function CoreController($http, $scope, authenticationService, accountService,
        categoryService, $state, $localStorage, notificationService, $timeout, $interval,
        $window, itemService, CONSTANT, messageCustomerService, $location, statisticService,
        adminService) {
        var vm = this;

        if($localStorage.token === null || $localStorage.token === undefined){
            $state.go('login');
        }

        vm.logout = function(){
            $localStorage.$reset();
            $state.go('login');
        }

   // process for admin 

    }

})();
