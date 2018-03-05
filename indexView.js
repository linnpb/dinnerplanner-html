var IndexView = function (container, model) {

	this.homeButton = container.find("#home-button");

	this.hide = function() {
		container.hide();
	}

	this.show = function() {
		container.show();
	}

};
