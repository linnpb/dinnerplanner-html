var DetailView = function (container, model) {

    var title = container.find("#dishTitle");
    var dishImg = container.find("#dishDetail");
    var preparation = container.find("#preparation");
    var cost = container.find("#cost");
    this.addButton = container.find("#addbtn");
    this.backButton = container.find("#backbtn");

    this.update = function(){
        var name='';
        var quantity='';
        var unit ='';
        
        if(model.getCurrentDish() != 0){

            var dish = model.getCurrentDish();
            var number = model.getNumberOfGuests();
            var sum = 0;
            
            for(var i=0; i < dish.extendedIngredients.length; i++){

                name += dish.extendedIngredients[i].name + '<br>';
                quantity += Math.round(dish.extendedIngredients[i].amount * number) + '<br>';
                unit += dish.extendedIngredients[i].unit + '<br>';

                };

                var imgHtml = '<img src="' + dish.image + '"/>';
                var sum = Math.round(model.getCurrentDish().pricePerServing * number);

                title.html(dish.title);
                dishImg.html(imgHtml);
                preparation.html(dish.instructions);

                container.find('#ing').html(name);
                container.find('#quant').html(quantity);
                container.find('#unit').html(unit);
                container.find('#numOfGuests').html(number);
                container.find('#cost').html(sum);
        }
        

    };
    this.hide = function() {
        container.hide();
    }

    this.show = function() {
        container.show();
    }

    model.addObserver(this);
}

