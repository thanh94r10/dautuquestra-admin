(function () {
    'use strict';
    angular
        .module('app')
        .directive('proBody', proBodyDirective);
    function proBodyDirective() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/share/directive/pro-table/pro-body/pro-body.html',
            scope: {
                proBody: '='
            },
            controller: proBodyController,
            controllerAs: 'vm'
        };
        return directive;
    }
    proBodyController.$inject = ['$scope', '$filter'];

    function proBodyController($scope, $filter) {
        var vm = this;
        var option = $scope.proBody;
        vm.contentList = option.contentList;
        vm.titleList = option.titleList;
        vm.sorting = option.sorting;
        vm.methodList = [];
        vm.actionList = option.actionList;
        vm.actionForRow = option.actionForRow;
        vm.message = option.message;
        vm.amount = 10;
        vm.currentPage = 0;
        vm.arrayChoose = [];
        vm.isNumber = [];
        init();

        function init() {
            $scope.$watch('proBody', function (value) {
                option = value;
                if (angular.isNumber(option.amountPerPage)) vm.amount = option.amountPerPage;
                if (angular.isNumber(option.currentPage)) vm.currentPage = option.currentPage;
                angular.forEach(option.contentList, function (element) {
                    angular.forEach(option.titleList, function (e) {
                        if (angular.isNumber(element[e])) {
                            element[e] = $filter('currency')(element[e], '', 0)
                        }
                    })
                })
                vm.contentList = option.contentList;
                vm.titleList = option.titleList;
                vm.actionList = option.actionList;
                vm.arrayChoose = option.arrayChoose;
                vm.message = option.message;
                if (vm.actionList !== undefined) {
                    vm.actionList.forEach(function (element) {
                        vm.methodList.push(element.action);
                    }, this);
                }
                vm.actionForRow = option.actionForRow;
            }, true);
        }
    }

})();
