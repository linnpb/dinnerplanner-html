var DishController = function (view, model, app) {

	view.searchButton.click(function(){
		var value = view.typeValue.val();
		console.log("Value is:" ,value)
		var search = view.search.val();
		model.setFilter(search);
		model.setType(value);
		view.update("searchResults");

	});


	view.searchForm.on('click',".dish", function(){
			var dishId = $(this).attr('id');
			model.getDish(dishId, function(data) {
				model.setCurrentDish(data);
				app.detailPage();
			})
	
			
	});
}

