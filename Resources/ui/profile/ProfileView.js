//FirstView Component Constructor
function ProfileView(Cloud) {
	var ProfileController = require('lib/controller/ProfileController');
	var controller = new ProfileController(Cloud);
	var user = controller.getProfile();
	
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		layout:'vertical'
	});
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var username_label = Ti.UI.createLabel({
		color:'#000',
		text:'utilisateur',
		height:'auto',
		width:'auto'
	});
	
	var password_label = Ti.UI.createLabel({
		color:'#000',
		text:'mot de passe',
		height:'auto',
		width:'auto'
	});
	
	self.add(username_label);
	self.add(password_label);
	
	
	return self;
}

module.exports = ProfileView;
