function MenuView(Cloud, MenuWindow) {
	var self = Ti.UI.createView({
		layout: 'vertical',
		backgroundColor: '#336699'
	});
	
	var logout_button = Ti.UI.createButton({
		title: 'Logout',
		height: 60,
		width: 250
	});
	
	var close_button = Ti.UI.createButton({
		title: 'Close',
		height: 60,
		width: 250
	});
	
	self.add(logout_button);
	self.add(close_button);
	
	logout_button.addEventListener('click', function(e) {
		var AuthController = require('lib/controller/AuthController');
		var controller = new AuthController(Cloud);
		controller.logoutUser();
	});
	
	close_button.addEventListener('click', function(e) {
		MenuWindow.close();
	});
	
	return self;
}

module.exports = MenuView;
