var OverViewController = function (view, model) {

	view.backButton.click(function() {
		$("#indexView").hide();
		$("#header").show();
		$("#sidebarView").show();
		$("#dishSearchView").show();
		$("#dishOverView").hide();
		$("#dinnerOverview").hide();
	
	});


}