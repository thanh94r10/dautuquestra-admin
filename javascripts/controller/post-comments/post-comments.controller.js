(function () {
    angular
        .module('app')
        .controller('PostCommentController', PostCommentController);

    PostCommentController.$injector = ['$state', '$scope',
        'advertisementService', '$localStorage', 'postService', 'categoryService', 'commentService', '$window'
    ];

    function PostCommentController($state, $scope, advertisementService,
        $localStorage, postService, categoryService, commentService, $window) {
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

        init();

        function init() {
            getListComment();
            vm.header = {
                titleList: ['Name', 'Email', 'content', 'timeComment'],
                sorting: sorting,
                translateTitleList: ['Tên', 'Email', 'Nội dung', 'Đăng lúc'],
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
            getListComment(vm.header.sort, vm.pagination.page, vm.pagination.amount);
        }

        function paging(field, page, amount) {
            getListComment(field, page, amount);
        }

        function changeCate() {
            getListComment(vm.header.sort, vm.pagination.page, vm.pagination.amount);
        }

        function getListComment(field, page, amount) {
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

            postService.getAllComments(field, page, amount).then(successCallback, errorCallback);
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
            $window.open("http://atlanticgam-vietnam.com/#/start/chi-tiet-tin/" + id, "_blank")
        }


        vm.deletePost = function (id) {
            swal({
                title: "Xác nhận xóa?",
                text: "Khi xóa bạn sẽ không thể khôi phục bình luận này!",
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
                    postService.deleteComment(id).then(function(response){
                        if(response.status === 200){
                            getListComment(vm.header.sort, vm.pagination.page, vm.pagination.amount);
                            swal("Deleted!", "Bình luận đã xóa thành công!", "success");
                        }
                    });
                } else {
                    swal("Đã hủy", "Giữ lại bình luận", "error");
                }
            });
        }

    }
})();
