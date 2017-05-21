(function () {
    'use strict';

    angular
        .module('app')
        .factory('chatService', chatService);

    chatService.$inject = ['$http'];

    function chatService($http) {
        var files = [];
        var service = {
            createRoomChat: createRoomChat,
            getRoomChatUser: getRoomChatUser,
            getRoomChatById: getRoomChatById
        };
        return service;

        ////////////////////////////

        function createRoomChat(room){
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.post('api/RoomChats/CreateRoomChat', room).then(successCallBack, errorCallBack);
        }

        function getRoomChatUser(idUser){
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/RoomChats/GetListChatRoom?idUser='+ idUser).then(successCallBack, errorCallBack);
        }

        function getRoomChatById(id){
            function successCallBack(response) {
                return response;
            }

            function errorCallBack(response) {
                return response;
            }
            return $http.get('api/RoomChats/GetChatRoomById?id='+ id).then(successCallBack, errorCallBack);
        }

    }
})();
