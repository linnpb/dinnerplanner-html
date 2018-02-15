
var DishView = function (container, model) {

  var filter = document.getElementById("filter");
  var value = filter.options[filter.selectedIndex].value;
  model.setFilter(value);

  this.update = function() {

    dishes.html("");

    var filters = model.getFilterValue(model.getFilter());
    var div = document.createElement('DIV');
    var index = -1;

    var numdish = 0;
    for(var j = 0 ; j < filters.length ; j++){
      for(var i = 0; i < model.getAllDishes(filters[j]).length; i++){
        if (numdish%3 == 0){
          var row = document.createElement('DIV');
          row.className = "row";
          div.appendChild(row);
          index += 1;
        }
        numdish++;

        var col = document.createElement('DIV');
        col.className = "col-md-3";

        var name = document.createElement('DIV');
        name.className ="name";
        name.innerHTML = model.getAllDishes(filters[j])[i].name;

        var img = document.createElement('img');
        var src = "images/" + model.getAllDishes(filters[j])[i].image;
        img.setAttribute("src", src);

        var dish = document.createElement('DIV');
        dish.className = "dish";
        dish.id = model.getAllDishes(filters[j])[i].id;
        dish.appendChild(img);
        dish.appendChild(name);

        col.appendChild(dish);
        div.children[index].appendChild(col);

      }
    }
    
    dishes.append(div);
  };


  var search = container.find("#search");

  var dishes = container.find("#dish");
  this.dishesC = dishes;

  this.searchbtn = container.find("#searchbtn");

  this.update();

  model.addObserver(this);
}
  

