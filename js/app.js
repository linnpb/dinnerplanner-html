$(function() {

	var model = new DinnerModel();

	$("#indexView").show();
	$("#header").show();
	$("#sidebarView").hide();
	$("#dishSearchView").hide();
	$("#dishOverView").hide();
	$("#dinnerOverview").hide();

	var indexView = new IndexView($("#indexView"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var dishView = new DishView($("#dishSearchView"), model);
	var detailView = new DetailView($("#dishOverView"), model);
	var overView = new OverView($("#dinnerOverview"), model);

	var indexController = new IndexController(indexView, model);
	var sidebarController = new SidebarViewController(sidebarView, model);
	var dishviewController = new DishController(dishView, model);
	var detailController = new DetailController(detailView, model);
	var overviewController = new OverViewController(overView, model);




	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});
