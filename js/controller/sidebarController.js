var SidebarViewController = function (view, model, app) {

 	view.plusButton.click(function() {
      model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  });

  view.minusButton.click(function(){
      model.setNumberOfGuests(model.getNumberOfGuests() - 1);
  });

  view.confirmDinner.click(function() {
      app.overViewPage();
  });

  view.dishPrice.on('click', '.remove-button', function() {
      var dishId = $(this).attr("id")
      model.removeDishFromMenu(dishId);
  });


}