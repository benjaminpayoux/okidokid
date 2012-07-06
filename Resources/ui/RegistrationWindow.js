//FirstView Component Constructor
function RegistrationWindow(Cloud) {
	var RegistrationView = require('ui/registration/RegistrationView');
	
	var softInput = Ti.UI.Android.SOFT_INPUT_STATE_HIDDEN | Ti.UI.Android.SOFT_INPUT_ADJUST_PAN;
	
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createWindow({
		backgroundColor:'#FFF',
		windowSoftInputMode:softInput,
		navBarHidden: true
	});
	
	var registrationView = new RegistrationView(Cloud);
	self.add(registrationView);
	
	return self;
}

module.exports = RegistrationWindow;
