(function () {
    angular
        .module('app')
        .config(config)
        .factory('httpInterceptor', httpInterceptor);

    config.$inject = ['$httpProvider', '$urlRouterProvider', '$stateProvider'];
    /* @ngInject */
    function config($httpProvider, $urlRouterProvider, $stateProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
        $urlRouterProvider.otherwise('/start');
        $stateProvider.state('start', {
            cache: false,
            url: '/start',
            templateUrl: 'javascripts/controller/core/start.html',
            authenticate: true,
            controller: 'CoreController as vm',
            resolve: {
                checkAuth: function (authenticationService) {
                    return authenticationService.checkAuthentication();
                }
            }
        });
    }

    httpInterceptor.$inject = ['$q', '$location', '$localStorage', 'CONSTANT'];

    function httpInterceptor($q, $location, $localStorage, CONSTANT) {
        return {
            request: function (_config) {
                if (_config.url.indexOf('.html') === -1 && _config.url.indexOf('http') === -1) {
                    _config.url = CONSTANT.BASE_URL + _config.url;
                }
                if ($localStorage.token) {
                    _config.headers.authorization = $localStorage.token.token_type + ' ' + $localStorage.token.access_token;
                }
                return _config;
            },
            response: function (response) {
                return response;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403 || rejection.status === 419) {
                    // Xu ly loi trong nay
                    delete $localStorage.token;
                    delete $localStorage.role;
                    $location.path('/login');
                    return $q.reject(rejection);
                } else {
                    return $q.reject(rejection);
                }
            }

        };
    }
})();
