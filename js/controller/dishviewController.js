var DishController = function (view, model) {

	view.searchbtn.click(function(){
		var filter = document.getElementById("filter");
		var value = filter.options[filter.selectedIndex].value;
		model.setFilter(value);
	});

	view.dishesC.on('click',".dish", function(){
			model.setId($(this).attr('id'));
			$("#indexView").hide();
			$("#header").show();
			$("#sidebarView").show();
			$("#dishSearchView").hide();
			$("#dishOverView").show();
			
		});
}


