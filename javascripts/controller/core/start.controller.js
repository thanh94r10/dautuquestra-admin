(function () {
    angular
        .module('app')
        .controller('CoreController', CoreController);

    CoreController.$inject = ['$http', '$scope', 'authenticationService', 'accountService',
        'categoryService', '$state', '$localStorage',
        'notificationService', '$timeout', '$interval', '$window', 'itemService', 'CONSTANT',
        'messageCustomerService', '$location', 'statisticService', 'adminService', 'toastr'];

    /* @ngInject */
    function CoreController($http, $scope, authenticationService, accountService,
        categoryService, $state, $localStorage, notificationService, $timeout, $interval,
        $window, itemService, CONSTANT, messageCustomerService, $location, statisticService,
        adminService,toastr) {
        var vm = this;

        if($localStorage.token === null || $localStorage.token === undefined){
            $state.go('login');
        }
   // process for admin 

    }

})();
