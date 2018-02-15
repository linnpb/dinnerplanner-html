var IndexController = function (view, model) {

	view.homeButton.click(function(){
		$("#indexView").hide();
		$("#header").show();
		$("#sidebarView").show();
		$("#dishSearchView").show();
		$("#dishView").show();
		$("#dishOverView").hide();
	});	
};
