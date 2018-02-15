var SidebarView = function (container,model) {

    this.plusButton = container.find("#plusGuest");
    this.minusButton = container.find("#minusGuest");
    var numOfGuests = container.find("#numOfGuests");

    this.dishPrice = container.find("#dishPrice");
    this.totalCost = container.find("#totalCost");
    this.confirmDinner = container.find("#confirmbtn");

    this.update = function() {
      var num = model.getNumberOfGuests();
      numOfGuests.html(num);

  		var menu = model.getFullMenu();
  		var printCost = "";
  		var totCost = 0;

  		for (i = 0; i < menu.length; i++){
        var dishCost = 0;
  			for (j=0; j<menu[i].ingredients.length; j++){
  				dishCost += menu[i].ingredients[j].price;
  			}
  			printCost += "<p style='text-align:left;'>" + num + " " + menu[i].name +
			   "<span id='totalCost' style='float:right;'>" + dishCost*num + "</span>" +
			   "</p>";

			  totCost = totCost + dishCost;
  	  };

  		printTotalCost = "<p style='text-align:left;'>"+
						"<span id='totalCost' style='float:right;''>SEK " + totCost*num + "</span>" +
						"</p>";

		  this.dishPrice.html(printCost);
		  this.totalCost.html(printTotalCost);
  	}

    this.update();

    model.addObserver(this);

};
