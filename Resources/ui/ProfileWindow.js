function ProfileWindow(dic) {
	var HeaderView = require('ui/header/HeaderView');
	var ProfileView = require('ui/profile/ProfileView');
	
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true
	});
	
	var headerView = new HeaderView(dic);
	self.add(headerView);
	
	var profileView = new ProfileView(dic);
	self.add(profileView);
	
	return self;
}

module.exports = ProfileWindow;