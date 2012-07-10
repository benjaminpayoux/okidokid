function MenuView(dic, MenuWindow) {
	var self = Ti.UI.createView({
		layout: 'vertical',
		backgroundColor: '#336699'
	});
	
	var profile_button = Ti.UI.createButton({
		title: 'Mon profil',
		height: 60,
		width: 250
	});
	
	var contacts_button = Ti.UI.createButton({
		title: 'Mes contacts',
		height: 60,
		width: 250
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
	
	self.add(profile_button);
	self.add(contacts_button);
	self.add(logout_button);
	self.add(close_button);
	
	contacts_button.addEventListener('click', function(e) {
		var ContactListWindow = require('ui/contact/ContactListWindow');
		new ContactListWindow(dic).open();
	});
	
	profile_button.addEventListener('click', function(e) {
		var ProfileWindow = require('ui/ProfileWindow');
		new ProfileWindow(dic).open();
	});
	
	logout_button.addEventListener('click', function(e) {
		dic.activityIndicator.show();
		var AuthController = require('lib/controller/AuthController');
		var controller = new AuthController(dic);
		controller.logoutUser();
	});
	
	close_button.addEventListener('click', function(e) {
		MenuWindow.close();
	});
	
	return self;
}

module.exports = MenuView;
