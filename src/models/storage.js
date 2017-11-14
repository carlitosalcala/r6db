'use strict';
var app = app || {};


(function () {
	var STORAGE_ID = 'players-r6db';
	app.storage = {
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			console.log("get.storage executed")
		},
		put: function (players) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(players));
			console.log("set.storage executed. Value:" + players)
		}
	};
})();