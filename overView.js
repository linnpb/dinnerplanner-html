var OverView = function (container, model) {

  var numOfGuests = container.find("#numOfGuests");
  this.backButton = container.find("#backbutton");
  this.printButton = container.find("#printbtn");

  this.update = function() {

    var num = model.getNumberOfGuests();
    numOfGuests.html(num);

    dishes.innerHTML = "";

    for (var i=0; i<model.getFullMenu().length; i++){

      var col = document.createElement('DIV');
      col.className = "col-md-3";

      var name = document.createElement('DIV');
      name.className ="name";
      name.innerHTML = model.getFullMenu()[i].title;

      var img = document.createElement('DIV');
      img.className = "imgdish";
      img.innerHTML = '<img src="'+ model.getFullMenu()[i].image + '"/>';

      var dish = document.createElement('DIV');
      dish.className = "dish";
      dish.appendChild(img);
      dish.appendChild(name);

      col.appendChild(dish);

      cost = document.createElement('DIV');
      cost.innerHTML = Math.round(model.getFullMenu()[i].pricePerServing*num); + "  SEK";

      col.appendChild(cost);
      dishes.appendChild(col);

    } 
      var costCol = document.createElement('DIV');
      costCol.className = "col-md-3";

      var title = document.createElement('DIV');
      title.className = "center";
      title.innerHTML = "Total price :";

      var price = document.createElement('DIV');
      price.className = "center";

      for (var i=0; i<model.getFullMenu().length; i++){
      price.innerHTML = model.getTotalMenuPrice(model.getFullMenu()[i].id) + "  SEK";
    }

      costCol.appendChild(title);
      costCol.appendChild(price);
    

    dishes.appendChild(costCol);
};

  var myDish = container.find("#myDishes");
  var dishes = document.createElement('DIV');
  dishes.className = "row";

  myDish.append(dishes);

  this.hide = function() {
    container.hide();
  }

  this.show = function() {
    container.show();
  }

this.update();
model.addObserver(this);
}