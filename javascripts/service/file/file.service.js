(function () {
    'use strict';

    angular
        .module('app')
        .factory('fileService', fileService);

    fileService.$inject = ['$http'];

    function fileService($http) {
        var files = [];
        var service = {
            getFiles: getFiles,
            pushFiles: pushFiles,
            pushDocument: pushDocument,
            deleteFilesTable: deleteFilesTable,
            deleteAllFilesTable: deleteAllFilesTable
        };
        return service;

        ////////////////////////////

        function getFiles() {
            return files;
        }
        function pushFiles(fileModel) {
            if (checkFiles(fileModel)) {
                if (fileModel.file.name.indexOf('.jpg') === -1
                    && fileModel.file.name.indexOf('.png') === -1
                    && fileModel.file.name.indexOf('.jpeg') === -1
                    && fileModel.file.name.indexOf('.gif') === -1) {
                    return false;
                }
                files.push(fileModel);
            }
            return true;
        }

        function pushDocument(fileModel) {
            if (checkFiles(fileModel)) {
                if (fileModel.file.name.indexOf('.pdf') === -1
                    && fileModel.file.name.indexOf('.doc') === -1
                    && fileModel.file.name.indexOf('.docx') === -1
                    && fileModel.file.name.indexOf('.jpg') === -1
                    && fileModel.file.name.indexOf('.png') === -1
                    && fileModel.file.name.indexOf('.jpeg') === -1) {
                    return false;
                }
                files.push(fileModel);
            }
            return true;
        }

        function deleteAllFilesTable() {
            files = [];
        }

        function deleteFilesTable(fileModel) {
            for (var i = 0; i < files.length; i++) {
                if (fileModel.file.name === files[i].file.name) {
                    files.splice(i, 1);
                }
            }
        }

        function checkFiles(fileModel) {
            for (var i = 0; i < files.length; i++) {
                if (fileModel.file.name === files[i].file.name) {
                    return false;
                }
            }
            return true;
        }
    }
})();
