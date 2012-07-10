function RegistrationWindow(dic) {
	
	var RegistrationView = require('ui/registration/RegistrationView');
	
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true,
		windowSoftInputMode: dic.softInput
	});
	
	var registrationView = new RegistrationView(dic);
	self.add(registrationView);
	
	return self;
}

module.exports = RegistrationWindow;
