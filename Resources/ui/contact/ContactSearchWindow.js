function ContactSearchWindow(dic) {
	var HeaderView = require('ui/header/HeaderView');
	var ContactList = require('ui/contact/ContactListView');
	
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true,
	});
	
	var headerView = new HeaderView(dic);
	self.add(headerView);
	
	var contactListView = new ContactListView(dic);
	self.add(contactListView);
	
	return self;
}

module.exports = ContactSearchWindow;