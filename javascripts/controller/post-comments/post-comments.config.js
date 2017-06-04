(function () {
    angular
        .module('app')
        .config(config);
    config.$inject = ['$stateProvider'];
    /* @ngInject */
    function config($stateProvider) {
        $stateProvider.state('start.post-comments', {
            url: '/post-comments',
            templateUrl: 'javascripts/controller/post-comments/post-comments.html',
            authenticate: true,
            controller: 'PostCommentController',
            controllerAs: 'vm'
        });
    }

})();
