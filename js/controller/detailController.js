var DetailController = function (view, model, app) {
	view.backButton.click(function() {
		app.dishPage();
	});

	view.addButton.click(function() {
		var dish = model.getCurrentDish();
		model.addDishToMenu(dish);
	});

};
