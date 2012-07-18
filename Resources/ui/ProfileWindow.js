function ProfileWindow(dic) {
	var HeaderView = require('ui/header/HeaderView');
	var ProfileView = require('ui/profile/ProfileView');
	var FooterView = require('ui/footer/FooterView');
	
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true
	});
	
	var headerView = new HeaderView(dic);
	self.add(headerView);
	
	var profileView = new ProfileView(dic);
	self.add(profileView);
	
	var footerView = new FooterView(dic);
	self.add(footerView);
	
	return self;
}

module.exports = ProfileWindow;