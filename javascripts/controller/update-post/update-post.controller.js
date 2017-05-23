(function () {
    angular
        .module('app')
        .controller('UpdatePostController', UpdatePostController);

    UpdatePostController.$inject = ['$http', '$state', '$scope', 'postService',
        'accountService', 'fileService', '$localStorage', 'categoryService', '$timeout', '$stateParams'];

    function UpdatePostController($http, $state, $scope, postService,
        accountService, fileService, $localStorage, categoryService, $timeout, $stateParams) {
        var vm = this;
        vm.category = '';
        vm.post = {};
        vm.listCates = [];
        vm.files = [];
        vm.Avatar = '';
        vm.IdPoster = $localStorage.id;
        vm.Title = '';
        vm.shortDesc = '';
        vm.chooseCate = chooseCate;

        vm.updatePost = updatePost;

        $timeout(initCkEditor());
        function initCkEditor() {
            CKEDITOR.replace('DescEditor', {
                language: 'vi'
            });
        }
        init();
        function init() {
            getPost();
            getListCategories();
        }

        function getPost() {

            function successCallBack(response) {
                if (response.status === 200) {
                    
                    vm.post = response.data;
                    vm.Title = vm.post.title;
                    var decodeDesc = $('<div/>').html(vm.post.description).text();
                    CKEDITOR.instances['DescEditor'].setData(decodeDesc);
                    vm.Avatar = vm.post.image;
                    vm.category = vm.post.cateId;
                    vm.shortDesc = vm.post.shortDesc;
                }
            }
            function errorCallBack(response) {

            }

            postService.getPostById($stateParams.Id).then(successCallBack, errorCallBack);
        }

        function chooseCate(cate) {
            console.log(cate);
        }

        // begin category
        function getListCategories() {
            function successCallBack(response) {
                if (response.status === 200) {
                    vm.listCates = response.data;
                    // angular.forEach(response.data, function (element) {
                    //     if (element.id = vm.category) {
                    //         element.selected = true;
                    //         vm.listCates.push(element);
                    //     }
                    //     else {
                    //         element.selected = false;
                    //         vm.listCates.push(element);
                    //     }
                    // });

                    $("#id_label_single").select2();

                }
            }

            function errorCallBack(response) {

            }
            categoryService.GetCategories().then(successCallBack, errorCallBack);
        }


        function updatePost() {
            var content = CKEDITOR.instances.DescEditor.getData();
            var post = {
                IdPost: $stateParams.Id,
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
                form.append('objUpdatePostModel', JSON.stringify(post));
                form.append('imagePost', vm.files[0].file);
            } else {
                form.append('objUpdatePostModel', JSON.stringify(post));
            }

            function successCallBack(response) {
                if (response.status === 200) {
                    swal({
                        title: "Thành công!",
                        text: "Cập nhật tin thành công!",
                        type: "success",
                        confirmButtonColor: "#64B9A1",
                        confirmButtonText: "Ok",
                        closeOnConfirm: true
                    },
                        function () {
                            $state.go('start.post-manager');
                        });
                }
            }

            function errorCallBack(response) {
            }

            postService.updatePost(form).then(successCallBack, errorCallBack);
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
