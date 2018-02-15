var SidebarViewController = function (view, model) {

 	view.plusButton.click(function() {
      model.setNumberOfGuests(model.getNumberOfGuests() + 1);
      console.log(model.getNumberOfGuests());
   	  });

  view.minusButton.click(function(){
          model.setNumberOfGuests(model.getNumberOfGuests() - 1);
          console.log(model.getNumberOfGuests());
  	});

  	view.confirmDinner.click(function() {
  		$("#indexView").hide();
		  $("#header").show();
		  $("#sidebarView").show();
		  $("#dishSearchView").show();
		  $("#dishView").show();
		  $("#dishOverView").hide();
  	});
}