(function () {
    angular
        .module('app')
        .config(config);
    config.$inject = ['$stateProvider'];
    /* @ngInject */
    function config($stateProvider) {
        $stateProvider.state('start.post-manager', {
            url: '/post-manager',
            templateUrl: 'javascripts/controller/post-manager/post-manager.html',
            authenticate: true,
            controller: 'PostManagerController',
            controllerAs: 'vm'
        });
    }

})();
