var PrintView = function (container, model) {

  var numOfGuests = container.find("#numOfGuests");
  this.backButton = container.find("#btnback");

  this.update = function() {

    var num = model.getNumberOfGuests();
    numOfGuests.html(num);

    dishes.innerHTML = "";

    for (var i=0; i<model.getFullMenu().length; i++){

      var col = document.createElement('DIV');
      col.className = "col-md-12 row-place"

      var col1 = document.createElement('DIV');
      col1.className = "col-md-3 col-md-12";

      var col2 = document.createElement('DIV');
      col2.className = "col-md-4 col-md-12"; 

      var col3 = document.createElement('DIV');
      col3.className = "col-md-5 col-md-12";  

      col.appendChild(col1);
      col.appendChild(col2);
      col.appendChild(col3);

      var name = document.createElement('DIV');
      name.className ="name";
      name.innerHTML = "<span style='font-size:20px'>" + model.getFullMenu()[i].title + "</span>";

      var info = document.createElement('DIV');
      info.className = "info";
      info.innerHTML = model.getFullMenu()[i].instructions;

      var prep = document.createElement('DIV');
      prep.className = "prep";
      prep.innerHTML = "<span style='font-size:20px'>PREPARATION</span>";

      var prepinfo = document.createElement('DIV');
      prepinfo.className = "prepinfo";
      prepinfo.appendChild(prep);
      prepinfo.appendChild(info);

      var img = document.createElement('DIV');
      img.className = "img";
      img.innerHTML = '<img src="'+ model.getFullMenu()[i].image + '"/>';

      col1.appendChild(img);
      col2.appendChild(name);
      col3.appendChild(prepinfo);

     dishes.appendChild(col);

   }
 };

  var print = container.find("#printout");
  var dishes = document.createElement('DIV');
  dishes.className = "row";

  print.append(dishes);

  this.hide = function() {
    container.hide();
  }

  this.show = function() {
    container.show();
  }

this.update();
model.addObserver(this);
}