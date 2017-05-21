(function () {
    'use strict';

    angular
        .module('app')
        .factory('commentService', commentService);

    commentService.$inject = ['$http', 'CONSTANT'];

    function commentService($http, CONSTANT) {
        var files = [];
        var service = {
            getListComment: getListComment,
            createComment: createComment,
            editComment: editComment,
            deleteComment: deleteComment,
            createReply: createReply
        };
        return service;

        ////////////////////////////

        function getListComment(ItemId, sort, page, amount) {
            if(sort == undefined){
                sort = 'timeComment_desc';
            }
            function successCallBack(response) {
                angular.forEach(response.data.Data, function (comment) {
                    if (comment.CustomerComment.avatar === null) {
                        comment.CustomerComment.avatar = 'style/icon/user.jpg';
                    } else {
                        comment.CustomerComment.avatar = CONSTANT.BASE_URL + comment.CustomerComment.avatar.substr(1);
                    }
                    if (comment.listReply === null) {
                        comment.hasReply = false;
                    } else {
                        angular.forEach(comment.listReply, function (reply) {
                            if (reply.CustomerReply.avatar === null) {
                                reply.CustomerReply.avatar = 'style/icon/user.jpg';
                            } else {
                                reply.CustomerReply.avatar = CONSTANT.BASE_URL + reply.CustomerReply.avatar.substr(1);
                            }
                        });
                    }
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/Comment/getListComments?itemSellId=' + ItemId + '&sort=' + sort + '&page=' + page + '&amount=' + amount)
                .then(successCallBack, errorCallBack);
        }

        function createComment(comment) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/Comment/CreateComment', comment).then(successCallBack, errorCallBack);
        }

        function createReply(comment) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/Comment/CreateReply', comment).then(successCallBack, errorCallBack);
        }

        function editComment(comment) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.put('api/Comment/UpdateComment', comment).then(successCallBack, errorCallBack);
        }

        function deleteComment(id) {
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.delete('api/Comment/Delete?id=' + id).then(successCallBack, errorCallBack);
        }

    }
})();
