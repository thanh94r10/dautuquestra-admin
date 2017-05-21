(function () {
    'use strict';

    angular
        .module('app')
        .factory('postService', postService);

    postService.$inject = ['$http', 'CONSTANT'];

    function postService($http, CONSTANT) {

        var service = {
            createPost: createPost,
            getAllPosts: getAllPosts,
            getPostById: getPostById,
            updatePost: updatePost
        };

        return service;

        ////////////////////////////

        function createPost(formData) {
            return $http.post('/api/PostNews/CreatePostNew', formData, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).then(sucessCallback, errorCallBack);
            function sucessCallback(response) {
                return response;
            }
            function errorCallBack(error) {
                console.log(error);
                return error;
            }
        }

        function getAllPosts(cateId, sort, page, amount) {

            function successCallBack(response) {
                angular.forEach(response.data.Data, function (element) {
                    element.image = CONSTANT.BASE_URL.substr(1) + element.image.substr(1);
                });
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('/api/PostNews/getListPosts?cateId=' + cateId +  '&sort=' + sort + '&page=' + page + '&amount=' + amount)
                .then(successCallBack, errorCallBack);
        }

        function getPostById(id) {

            function successCallBack(response) {
                response.data.image = CONSTANT.BASE_URL + response.data.image.substr(1);
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('/api/PostNews/getPostById?postId=' + id)
                .then(successCallBack, errorCallBack);
        }

        function updatePost(formData) {
            return $http.put('/api/PostNews/UpdatePostNew', formData, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).then(sucessCallback, errorCallBack);
            function sucessCallback(response) {
                return response;
            }
            function errorCallBack(error) {
                console.log(error);
                return error;
            }
        }
        
    }
})();
