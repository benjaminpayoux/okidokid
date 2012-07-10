function AuthWindow(dic) {
	
	var AuthView = require('ui/auth/AuthView');
	
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true,
		exitOnClose: true,
		windowSoftInputMode: dic.softInput
	});
	
	var authView = new AuthView(dic);
	self.add(authView);
	
	return self;
}

module.exports = AuthWindow;