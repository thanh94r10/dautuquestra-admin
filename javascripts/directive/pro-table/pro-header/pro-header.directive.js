(function() {
    'use strict';
    angular
        .module('app')
        .directive('proHeader', proHeaderDirective);

    function proHeaderDirective() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/share/directive/pro-table/pro-header/pro-header.html',
            scope: {
                proHeader: '='
            },
            controller: proHeaderController,
            controllerAs: 'vm'
        };
        return directive;
    }
    proHeaderController.$inject = ['$scope'];

    function proHeaderController($scope) {
        var vm = this;
        var option = $scope.proHeader;
        vm.ascentFlag = [];
        vm.checkSortType = checkSortType;
        vm.sortAction = option.sorting;
        vm.titleList = option.titleList;
        vm.actionHeader = option.action;
        vm.translateTitleList = option.translateTitleList;
        vm.headerWidthList = option.headerWidthList
        init();

        function init() {
            $scope.$watch('proHeader', function(value) {
                option = value;
            });

            // init 
            angular.forEach(vm.titleList, function() {
                vm.ascentFlag.push(0);
            });
        }

        function checkSortType(index) {
            for (var i = 0; i < vm.ascentFlag.length; i++) {
                if (i !== index) {
                    vm.ascentFlag[i] = 0;
                }
            }
            if (vm.ascentFlag[index] === 0 || vm.ascentFlag[index] === 1) {
                vm.ascentFlag[index] = -1;

                vm.sortAction(vm.titleList[index], '_DESC');
            } else {
                vm.ascentFlag[index] = 1;
                vm.sortAction(vm.titleList[index], '');
            }
        }
    }
})();
