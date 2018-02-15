var DetailView = function (container, model) {

    var dishDetail = container.find("#dishDetail");
    var numberOfGuests = container.find("#numOfGuests");
    var ingredients = container.find("#ingredients");
    var total = container.find("#totCost");
    var name = container.find("#dishTitle");
    var title = document.createElement('h3');
   
    name.append(title);  
    var img = document.createElement("img");
    var description = document.createElement("DIV");
    dishDetail.append(img);
    dishDetail.append(description);

    this.update = function() {

        var num = model.getNumberOfGuests();
        var id = model.getId();
        title.innerHTML = model.getDish(id).name;
        var src = "images/" + model.getDish(id).image;
        img.setAttribute("src", src);
        description.innerHTML = model.getDish(id).description;
        numberOfGuests.html(num);

        ingredients.html("");

        var total = document.createElement('DIV');
        total.className = "col-xs-2 right";
        total.innerHTML = model.getTotalMenuPrice(id);
        totCost.appendChild(total);

        for(var i = 0; i < model.getDish(id).ingredients.length; i++) {

            var row = document.createElement('DIV');
            row.className = "row";

            var quantity = document.createElement('DIV');
            quantity.className = "col-xs-2";
            quantity.innerHTML = parseFloat((model.getDish(id).ingredients[i].quantity * model.getNumberOfGuests()).toPrecision(3)) + model.getDish(id).ingredients[i].unit;
            //toPrecision = avrunda 3 siffror. parseFloat = returnera första siffror i rad(?)

            var ingredient = document.createElement('DIV');
            ingredient.className = "col-xs-6";
            ingredient.innerHTML = model.getDish(id).ingredients[i].name;

            var sek = document.createElement('DIV');
            sek.className = "col-xs-2";
            sek.innerHTML = "SEK";

            var price = document.createElement('DIV');
            price.className = "col-xs-2 right";
            price.innerHTML = model.getDish(id).ingredients[i].price * model.getNumberOfGuests();

            row.appendChild(quantity);
            row.appendChild(ingredient);
            row.appendChild(sek);
            row.appendChild(price);
            ingredients.append(row);

        } 
    };

    this.backButton = container.find("#backbtn");
    this.addButton = container.find("#addbtn");

    this.update();
    model.addObserver(this);
}
