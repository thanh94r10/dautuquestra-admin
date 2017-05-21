(function() {
    'use strict';

    angular
        .module('app')
        .directive('ttTable', tableDirective);

    function tableDirective() {
        // Usage: ...
        var directive = {
            restrict: 'ACE',
            templateUrl: 'javascripts/directive/table/table.html',
            scope: {},
            link: link,
            controller: tableController,
        };
        return directive;

        ////////////////////////////

        function link(scope, element, attrs) {

        }

    }
    tableController.$inject = [];

    function tableController() {

    }
})();
