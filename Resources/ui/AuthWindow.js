function AuthWindow(Cloud) {
	var self = Ti.UI.createWindow({
		windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_STATE_HIDDEN | Ti.UI.Android.SOFT_INPUT_ADJUST_PAN,
		exitOnClose: true,
		navBarHidden: true
	});
	
	var AuthView = require('ui/auth/AuthView');
	var authView = new AuthView(Cloud);
	self.add(authView);
	
	return self;
}

module.exports = AuthWindow;
