(function () {
    angular
        .module('app')
        .controller('PostManagerController', PostManagerController);

    PostManagerController.$injector = ['$state', '$scope',
        'advertisementService', '$localStorage', 'postService', 'categoryService'
    ];

    function PostManagerController($state, $scope, advertisementService,
        $localStorage, postService, categoryService) {
        var vm = this;
        vm.sorting = sorting;
        vm.paging = paging;
        vm.totalPage = '';
        vm.amountRecordArray = [10, 20, 30, 40];
        vm.amountRecord = 10;
        vm.amount = '';
        vm.page = '';
        vm.cateId = '0';

        vm.viewDetail = viewDetail;
        vm.getListCategories = getListCategories;
        vm.listCates = [];
        vm.changeCate = changeCate;

        getListCategories();

        init();

        function init() {
            getListPost();
            $(".js-example-basic-single").select2();
            vm.header = {
                titleList: ['image', 'title', 'TimePost', 'AdminInfo'],
                sorting: sorting,
                translateTitleList: ['Hình ảnh', 'Tiêu đề tin', 'Thời gian đăng', 'Người đăng'],
                sortList: [false, true, true, false],
                ascentFlag: [0, 1, 1, 0],
                checkSortType: checkSortType
            };
            vm.body = {
                contentList: []
            };
            vm.pagination = {
                page: '',
                amount: '',
                totalPage: '',
                amountRecordArray: [10, 20, 30, 40],
                paging: paging
            };
        }

        function sorting(field, _type) {
            vm.header.sort = field + _type;
            getListPost(vm.cateId, vm.header.sort, vm.pagination.page, vm.pagination.amount);
        }

        function paging(field, page, amount) {
            getListPost(vm.cateId, field, page, amount);
        }

        function changeCate() {
            getListPost(vm.cateId, vm.header.sort, vm.pagination.page, vm.pagination.amount);
        }

        function getListPost(cateId, field, page, amount) {
            function successCallback(response) {
                if (response.status === 200) {

                    vm.body.contentList = response.data.Data;
                    vm.totalPage = response.data.TotalPage;
                    vm.page = response.data.Page;
                    vm.pagination.amount = response.data.Amount;
                    vm.pagination.totalPage = response.data.TotalPage;
                    vm.pagination.page = response.data.Page;
                }

            }
            function errorCallback(error) {
                console.log(error);
            }

            postService.getAllPosts(vm.cateId, field, page, amount).then(successCallback, errorCallback);
        }

        function checkSortType(index) {
            if (vm.header.sortList[index]) {
                for (var i = 0; i < vm.header.ascentFlag.length; i++) {
                    if (i !== index) {
                        vm.header.ascentFlag[i] = 0;
                    }
                }
                if (vm.header.ascentFlag[index] === 0 || vm.header.ascentFlag[index] === 1) {
                    vm.header.ascentFlag[index] = -1;
                    vm.header.sorting(vm.header.titleList[index], '_DESC');
                } else {
                    vm.header.ascentFlag[index] = 1;
                    vm.header.sorting(vm.header.titleList[index], '');
                }
            }
        }

        function viewDetail(id) {
            $state.go('start.update-post', { Id: id });
        }

        function getListCategories() {
            function successCallBack(response) {
                if (response.status === 200) {
                    vm.listCates = response.data;
                }
            }

            function errorCallBack(response) {

            }
            categoryService.GetCategories().then(successCallBack, errorCallBack);
        }

        vm.deletePost = function (id) {
            swal({
                title: "Xác nhận xóa?",
                text: "Khi xóa bạn sẽ không thể khôi phục tin này!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Vâng, xóa nó!",
                cancelButtonText: "Không, hủy xóa!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) {
                if (isConfirm) {
                    postService.deletePost(id).then(function(response){
                        if(response.status === 200){
                            getListPost(vm.cateId, vm.header.sort, vm.pagination.page, vm.pagination.amount);
                            swal("Deleted!", "Bài đăng đã xóa thành công!", "success");
                        }
                    });
                } else {
                    swal("Đã hủy", "Tin của bạn được giữ lại :)", "error");
                }
            });
        }

    }
})();
