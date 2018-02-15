var DetailController = function (view, model) {

	view.backButton.click(function() {
		$("#indexView").hide();
		$("#header").show();
		$("#sidebarView").show();
		$("#dishSearchView").hide();
		$("#dishOverView").hide();
		$("#dinnerOverview").show();
	
	});


    view.addButton.click(function() {
    	model.addDishToMenu(model.getId());
    });


}
