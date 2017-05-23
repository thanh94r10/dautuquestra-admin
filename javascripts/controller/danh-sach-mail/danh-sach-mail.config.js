(function () {
    angular
        .module('app')
        .config(config);
    config.$inject = ['$stateProvider'];
    /* @ngInject */
    function config($stateProvider) {
        $stateProvider.state('start.danh-sach-mail', {
            url: '/danh-sach-mail',
            templateUrl: 'javascripts/controller/danh-sach-mail/danh-sach-mail.html',
            authenticate: true,
            controller: 'ListMailController',
            controllerAs: 'vm'
        });
    }

})();
