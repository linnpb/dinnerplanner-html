var DishView = function (container, model) {

  this.searchButton = container.find("#searchbtn");
  this.typeValue = container.find("#filter");
  this.search = container.find("#search");
  this.loading = container.find("#loading");

  var dishes = container.find("#dish");
  this.searchForm = dishes;

  this.update = function(changes) {
    if(changes == "searchResults") {

    dishes.html("");

    var filter = model.getFilter();
    var type = model.getType();
    var div = document.createElement('DIV');
    var index = -1;

    var numdish = 0;
    model.getAllDishes(type, filter, function(data) {
      for(var i = 0; i < data.results.length; i++) {
        if (numdish%3 == 0){
          var row = document.createElement('DIV');
          row.className = "row";
          div.appendChild(row);
          index += 1;
        }
        numdish++;

        var col = document.createElement('DIV');
        col.className = "col-md-4";

        var dish = document.createElement('IMG');
        dish.className = "dish";
        var src = data.baseUri + data.results[i].image;
        dish.style.backgroundImage = "url(" + src + ")";
        dish.id = data.results[i].id;

        var name = document.createElement('DIV');
        name.className ="dishname";
        name.innerHTML = data.results[i].title;

        col.appendChild(name);
        col.appendChild(dish);
        div.children[index].appendChild(col);

      }

    }, function(error) {
      alert("error");

    });

    dishes.append(div);
    }
  };
    

  this.hide = function() {
    container.hide();
  }

  this.show = function() {
    container.show();
  }

  this.update("searchResults");
  //model.addObserver(this);
}

