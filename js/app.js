$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.getNumberOfGuests();
	
	// And create the instance of ExampleView
	var availableDishes = new dishView($("#dishSearchView"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});
