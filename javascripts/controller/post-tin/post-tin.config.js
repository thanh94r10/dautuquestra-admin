(function() {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];
    / @ngInject /;
    function config($stateProvider) {
        $stateProvider.state('start.post-tin', {
            url: '/post-tin',
            templateUrl: 'javascripts/controller/post-tin/post-tin.html',
            controller: 'PostTinController',
            controllerAs: 'vm'
        });
    }
})();
