(function () {
    angular
        .module('app')
        .controller('PostTinController', PostTinController)
        .directive('fileModel', [
            '$parse', 'accountService',
            function ($parse, accountService) {
                return {
                    restrict: 'A',
                    link: function (scope, element, attrs) {
                        element.bind('change', function () {
                            scope.$apply(function () {
                                var fileModel = {
                                    file: [],
                                    success: false,
                                    progress: 0
                                };
                                if (attrs.multiple) {
                                    for (var i = 0; i < element[0].files.length; i++) {
                                        fileModel = {
                                            file: element[0].files[i],
                                            success: false,
                                            progress: 0
                                        };
                                        accountService.pushImage(fileModel);
                                    }
                                } else {
                                    fileModel = {
                                        file: element[0].files[0],
                                        success: false,
                                        progress: 0
                                    };
                                    accountService.pushImage(fileModel);
                                }
                            });
                        });
                    }
                };
            }
        ]);;

    PostTinController.$inject = ['$http', '$state', '$scope', 'userService',
        'advertisementService', 'accountService', '$localStorage', 'postService',
        'requestService', 'CONSTANT', '$timeout', 'categoryService'];

    function PostTinController($http, $state, $scope, userService,
        advertisementService, accountService, $localStorage, postService,
        requestService, CONSTANT, $timeout, categoryService) {
        var vm = this;
        vm.files = [];
        vm.listCates = [];
        vm.category = '';
        vm.imagePost = '';
        vm.shortDesc = '';

        vm.Title = '';
        vm.IdPoster = $localStorage.id;

        getListCategories();

        $timeout(initCkEditor());
        function initCkEditor() {
            CKEDITOR.replace('DescEditor', {
                language: 'vi'
            });
            $("#id_label_single").select2();
        }

        function getListCategories() {
            function successCallBack(response) {
                if (response.status === 200) {
                    vm.listCates = response.data;
                    console.log(vm.listCates);
                }
            }

            function errorCallBack(response) {

            }
            categoryService.GetCategories().then(successCallBack, errorCallBack);
        }

        vm.createPost = createPost;

        function createPost() {
            var content = CKEDITOR.instances.DescEditor.getData();
            var post = {
                Title: vm.Title,
                Description: $('<div/>').text(content).html(),
                IdPoster: vm.IdPoster,
                IdCate: vm.category,
                shortDesc: vm.shortDesc
            };

            // // upload avatar
            vm.files = accountService.getImages();
            var form = new FormData();
            if (vm.files[0] !== undefined) {
                form.append('objCreatePostModel', JSON.stringify(post));
                form.append('imagePost', vm.files[0].file);
            } else {
                form.append('objCreatePostModel', JSON.stringify(post));
            }

            function successCallBack(response){
                if(response.status === 200){
                    notiSuccess();
                }
            }

            function errorCallBack(response) {
            }

            postService.createPost(form).then(successCallBack, errorCallBack);
        }

        function notiSuccess(){
            swal({
                title: "Thành công!",
                text: "Đăng tin thành công!",
                type: "success",
                confirmButtonColor: "#64B9A1",
                confirmButtonText: "Ok",
                closeOnConfirm: true
            },
            function () {
                $state.go('start.post-manager');
            });
        }

        $scope.fileReaderSupported = window.FileReader != null;
        $scope.photoChanged = function (files) {
            if (files != null) {
                var file = files[0];
                if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
                    $timeout(function () {
                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(file);
                        fileReader.onload = function (e) {
                            $timeout(function () {
                                vm.Avatar = e.target.result;
                            });
                        };
                    });
                }
            }
        };

    };
})();
