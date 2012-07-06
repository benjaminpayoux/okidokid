//FirstView Component Constructor
function ProfileWindow(Cloud) {
	var ProfileView = require('ui/profile/ProfileView');
	
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createWindow({
		backgroundColor:'#FFF'
	});
	
	var profileView = new ProfileView(Cloud);
	self.add(profileView);
	
	return self;
}

module.exports = ProfileWindow;
