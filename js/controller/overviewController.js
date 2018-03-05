var OverViewController = function (view, model, app) {

	view.backButton.click(function() {
		app.dishPage();
	});

	view.printButton.click(function() {
		app.printPage();
	});



};