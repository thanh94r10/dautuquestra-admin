(function () {
    angular
        .module('app')
        .controller('ListMailController', ListMailController);

    ListMailController.$injector = ['$state', '$scope',
        'advertisementService', '$localStorage', 'postService', 'categoryService', '$timeout'
    ];

    function ListMailController($state, $scope, advertisementService,
        $localStorage, postService, categoryService, $timeout) {
        var vm = this;
        vm.filter = '';
        vm.listEmail = [];

        vm.selectedall = false;

        getAllEmailsRegister();

        function getAllEmailsRegister() {
            function successCallBack(response) {
                if (response.status === 200) {
                    angular.forEach(response.data, function (e) {
                        e.value = false;
                        vm.listEmail.push(e);
                    });
                }
            }
            function errorCallBack(response) {

            }
            postService.getAllEmailsRegister().then(successCallBack, errorCallBack);
        }

        vm.selectAll = function () {
            angular.forEach(vm.listEmail, function (e) {
                e.value = vm.selectedall;
            });
        }

        $scope.$watch('vm.listEmail', function () {
            var keepGoing = true;
            angular.forEach(vm.listEmail, function (e) {
                if (keepGoing) {
                    if (e.value == false) {
                        keepGoing = false;
                    }
                }
            });
            if (!keepGoing) {
                vm.selectedall = false;
            } else {
                vm.selectedall = true;
            }
        }, true);

        vm.openPopupMail = function () {
            var keepGoing = true;
            angular.forEach(vm.listEmail, function (e) {
                if (keepGoing) {
                    if (e.value == true) {
                        keepGoing = false;
                    }
                }
            });
            if (keepGoing) {
                swal("Oops!", "Không có email nào được chọn!", "error");
            } else {
                $('#popupsendmail').modal('show');
            }

        }

        $timeout(initCkEditor());
        function initCkEditor() {
            CKEDITOR.replace('DescEditor', {
                language: 'vi'
            });
        }

        vm.sendMail = function () {
            $('#popupsendmail').modal('hide');
            var content = CKEDITOR.instances.DescEditor.getData();
            var listEmail = [];
            angular.forEach(vm.listEmail, function (e) {
                if (e.value == true) {
                    listEmail.push(e.Email);
                }
            });
            var model = {
                content: content,
                emails: listEmail
            }

            function successCallBack(response) {
                if (response.status === 200) {
                    swal("Thành công!", "Gửi mail thành công!", "success");
                } else {
                    swal("Oops!", "Có lỗi trong quá trình gửi mail!", "error");
                }
            }
            function errorCallBack(response) {
                swal("Oops!", "Có lỗi trong quá trình gửi mail!", "error");
            }
            postService.sendMail(model).then(successCallBack, errorCallBack);

        }
    }
})();
