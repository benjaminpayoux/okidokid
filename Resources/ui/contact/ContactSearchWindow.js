function ContactSearchWindow(dic) {
	var HeaderView = require('ui/header/HeaderView');
	var ContactSearchView = require('ui/contact/ContactSearchView');
	
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true,
	});
	
	var headerView = new HeaderView(dic);
	self.add(headerView);
	
	var contactSearchView = new ContactSearchView(dic);
	self.add(contactSearchView);
	
	return self;
}

module.exports = ContactSearchWindow;