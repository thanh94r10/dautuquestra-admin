(function () {
    'use strict';

    angular
        .module('app')
        .factory('utilService', utilService);

    utilService.$inject = ['$http'];

    function utilService($http) {
        var files = [];
        var service = {
            countdown: countdown,
            chunk : chunk
        };
        return service;

        ////////////////////////////

        function getUtcDate(test) {
			return new Date(test.getFullYear(), test.getUTCMonth(),
				test.getUTCDate(), test.getUTCHours(), test.getUTCMinutes(), test.getUTCSeconds());
		}

        function countdown(endtime) {
            var today = new Date();
            var BigDay = getUtcDate(endtime);
            // var BigDay = BigDayUTC.toUTCString();
            var msPerDay = 24 * 60 * 60 * 1000;
            var timeLeft = (BigDay.getTime() - today.getTime());

            var e_daysLeft = timeLeft / msPerDay;
            var daysLeft = Math.floor(e_daysLeft);

            var e_hrsLeft = (e_daysLeft - daysLeft) * 24;
            var hrsLeft = Math.floor(e_hrsLeft);

            var e_minsLeft = (e_hrsLeft - hrsLeft) * 60;
            var minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);

            var secondsLeft = Math.floor((e_minsLeft - minsLeft) * 60);
            var result = [daysLeft, hrsLeft, minsLeft, secondsLeft];
            return result;
            // $('#countdown').html("<ul><li><small>" + daysLeft + "</small><span>Days</span></li><li><small>" + hrsLeft + "</small><span>Hours</span></li><li><small>" + minsLeft + "</small><span>Minutes</span></li><li><small>" + secondsLeft + "</small><span>Seconds</span></li></ul>");
        }
        function chunk(arr, size) {
			var newArr = [];
			for (var i = 0; i < arr.length; i += size) {
				newArr.push(arr.slice(i, i + size));
			}
			return newArr;
		}

    }
})();
