/** ExampleView Object constructor
 * 
 * This object represents the code for one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var detailView = function (container, model) {
  
  var dishesPrint = container.find("#detailView");

  dishesHtml = "<div class='row left'>";

  for (var i=0; i<model.dishes.length;i++){
    dishesHtml +=  "<div class='row";
    dishesHtml +=  model.dishes[i].name;
    dishesHtml +=  "' >";
    dishesHtml += "</div>";
  }

  dishesHtml +="</div>";

  // Print html
  dishesPrint.html(dishesHtml);
};
