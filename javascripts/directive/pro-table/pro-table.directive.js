(function () {
    'use strict';
    angular
        .module('app')
        .directive('ngEnter', function () {
            return function (scope, element, attrs) {
                element.bind("keydown keypress", function (event) {
                    if (event.which === 13) {
                        scope.$apply(function () {
                            scope.$eval(attrs.ngEnter);
                        });
                        event.preventDefault();
                    }
                });
            };
        })
        .directive('proTable', proTableDirective);
    function proTableDirective() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/share/directive/pro-table/pro-table.html',
            scope: {
                proTable: '=',
                searchFunction: '='
            },
            controller: proTableController,
            controllerAs: 'vm'
        };
        return directive;
    }
    proTableController.$inject = ['$scope'];

    function proTableController($scope) {
        var vm = this;
        vm.option = $scope.proTable;
        vm.searchFunction = $scope.searchFunction;
        vm.searchShow = false;
        init();

        function init() {            
            vm.searchShow = angular.isFunction(vm.searchFunction)
            $scope.$watch('proTable', function (value) {
                if (angular.isNumber(value.pagination.amount)) value.body.amountPerPage = value.pagination.amount;
                if (angular.isNumber(value.pagination.page)) value.body.currentPage = value.pagination.page;
                vm.option = value;
                vm.option.header = value.header;
                vm.option.body = value.body;
                vm.pagination = value.pagination;
            }, true);
        }
    }

})();
