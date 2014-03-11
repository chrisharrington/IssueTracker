﻿
(function (root) {

	var _bar;

	root.init = function () {
		_setupPath();
		_setupHighcharts();
		_setupNanobar();
		_setupAjaxPrefilters();

		IssueTracker.Header.init();
		ko.applyBindings(IssueTracker);
	};
	
	function _setupPath() {
		Path.root("#/" + IssueTracker.selectedProject().name.formatForUrl() + "/issues");
		Path.listen();
	}

	function _setupHighcharts() {
		Highcharts.setOptions({
			colors: ["#D42C2C", "#2F7ED8", "#FA9141", "#1AADCE", "#8BBC21", "#0D233A"]
		});
	}

	function _setupNanobar() {
		_bar = new Nanobar({
			bg: "#64A3ED"
		});
		
		$(document).ajaxSend(function () {
			_bar.go(15);
		}).ajaxComplete(function () {
			_bar.go(100);
		});
	}

	function _setupAjaxPrefilters() {
		$.ajaxPrefilter(function (options, original) {
			if (IssueTracker.selectedProject)
				options.data = $.param($.extend(original.data, { projectId: IssueTracker.selectedProject().id }));
		});
	}

})(root("IssueTracker.Init"));