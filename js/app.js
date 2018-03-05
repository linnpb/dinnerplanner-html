$(function() {

	var model = new DinnerModel();

	var indexView = new IndexView($("#indexView"), model);
	var indexController = new IndexController(indexView, model, this);

	var sidebarView = new SidebarView($("#sidebarView"), model);
	var sidebarController = new SidebarViewController(sidebarView, model, this);

	var dishView = new DishView($("#dishSearchView"), model);
	var dishviewController = new DishController(dishView, model, this);

	var detailView = new DetailView($("#dishOverView"), model);
	var detailController = new DetailController(detailView, model, this);

	var overView = new OverView($("#dinnerOverview"), model);
	var overviewController = new OverViewController(overView, model, this);

	var printoutView = new PrintView($("#printoutView"), model);
	var printoutController = new PrintController(printoutView, model, this);

	$(document).ajaxSend(function(event, request, settings) {
  		$('#loading').show();
	});

	$(document).ajaxComplete(function(event, request, settings) {
 		$('#loading').hide();
	});


	this.printPage = function() {
		indexView.hide();
		dishView.hide();
		overView.hide();
		sidebarView.hide();
		detailView.hide();
		printoutView.show();
	}

	this.detailPage = function() {
		indexView.hide();
		dishView.hide();
		overView.hide();
		printoutView.hide();
		sidebarView.show();
		detailView.show();
	}

	this.overViewPage = function() {
		indexView.hide();
		sidebarView.hide();
		dishView.hide();
		detailView.hide();
		printoutView.hide();
		overView.show();
	}

	this.dishPage = function() {
		indexView.hide();
		detailView.hide();
		overView.hide();
		printoutView.hide();
		sidebarView.show();
		dishView.show();
	}

	this.homePage = function() {
		sidebarView.hide();
		dishView.hide();
		detailView.hide();
		overView.hide();
		printoutView.hide();
		indexView.show();
	}

	this.homePage();

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});