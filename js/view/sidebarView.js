var SidebarView = function (container, model) {

  var totCost = container.find("#totalCost");
  var number = container.find("#numOfGuests");
  
  this.dishPrice = container.find("#dishPrice");
  this.plusButton = container.find("#plusGuest");
  this.minusButton = container.find("#minusGuest");
  this.confirmDinner = container.find("#confirmbtn");
  this.remove = container.find(".remove-button");


  this.update = function() {

    var num = model.getNumberOfGuests(); 
    var menu = model.getFullMenu();
    var name = "";
    var dishprice = "";
    var htmlPrint = "";

    for (var i = 0; i < menu.length; i++) {
      
      var sum = menu[i].pricePerServing*num;
      dishCost = sum;
      title = menu[i].title.substring(0, 15) + "..";
        dishprice = sum;
        htmlPrint += '<div class="row">'
        htmlPrint += '<div id="' + menu[i].id + '"class="remove-button col-sm-2"><span class="glyphicon glyphicon-trash"></span></div>';
        htmlPrint += '<div class="dishtitle col-sm-8" >' + title + '</div>';
        htmlPrint += '<div class="col-sm-2" >' + Math.round(dishCost) + '</div>';
        htmlPrint += '</div>'
        htmlPrint += '<br>';
    
    }

    this.dishPrice.html(htmlPrint);

    totCost.html(model.getTotalMenuPrice());
    number.html(model.getNumberOfGuests());

  };
  

  this.hide = function() {
    container.hide();
  }

  this.show = function() {
    container.show();
  }

  this.update();
  model.addObserver(this);

};



