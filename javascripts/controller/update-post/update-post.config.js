(function() {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider.state('start.update-post', {
            url: '/update-post/:Id',
            templateUrl: 'javascripts/controller/update-post/update-post.html',
            controller: 'UpdatePostController',
            controllerAs: 'vm'
        });
    }
})();
