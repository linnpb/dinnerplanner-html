
var OverView = function (container, model) {

  this.numOfGuests = container.find("#numOfGuests");
  this.numOfGuests.html(model.getNumberOfGuests());
  this.backButton = container.find("#backbtn");

  this.update = function() {

  var dishesPrint = container.find("#myDishes");

    dishesHtml = "";

  for (var i=0; i<model.dishes.length;i++){
    dishesHtml +=  "<div class='overView col-md-3 h-200'>";
    dishesHtml +=  "<div class='thumbnail'>";
    dishesHtml +=  "<a href='dishdetails.html'><img height='200' width='200' src='images/";
    dishesHtml +=  model.dishes[i].image;
    dishesHtml +=  "'</a>";
    dishesHtml += "<div class='caption'>";
    dishesHtml += "<h4>"
    dishesHtml += model.dishes[i].name;
    dishesHtml += "</h4>";
    dishesHtml += "</div>";
    dishesHtml += "</div>";
    dishesHtml += "</div>";
  }

  // Print html
  dishesPrint.html(dishesHtml);
};

this.update();
model.addObserver(this);
}
