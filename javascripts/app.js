(function () {
    angular.module('app', [
        'ui.router',
        'ngStorage',
        'ui.bootstrap',
        'ngSanitize',
        'toastr'
    ]).run(init);

    init.$inject = ['$rootScope', '$location', '$window'];

    function init($rootScope, $location, $window) {
        function stateChangeStart(event, toState, toParams, fromState) {
        }

        function stateChangeSuccess() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }

        $rootScope.$on('$stateChangeStart', stateChangeStart);
        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
        $rootScope.$on('$viewContentLoaded', function () {
        });

        $rootScope.$on('$locationChangeSuccess', function () {
            $rootScope.actualLocation = $location.path();
        });

        $rootScope.$watch(function () { return $location.path() }, function (newLocation, oldLocation) {
            if ($rootScope.actualLocation === newLocation) {
                $window.location.reload();
            }
        });

        
        CKEDITOR.editorConfig = function (config) {
            config.extraPlugins = 'imageuploader';
        };
    }
})();
