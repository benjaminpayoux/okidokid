//FirstView Component Constructor
function RegistrationView(Cloud) {
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
	var username_input = Ti.UI.createTextField({
		height:60,
		width:250
	});
	
	var email_label = Ti.UI.createLabel({
		color:'#000',
		text:'email',
		height:'auto',
		width:'auto'
	});
	var email_input = Ti.UI.createTextField({
		height:60,
		width:250
	});
	
	var password_label = Ti.UI.createLabel({
		color:'#000',
		text:'mot de passe',
		height:'auto',
		width:'auto'
	});
	var password_input = Ti.UI.createTextField({
		passwordMask:true,
		height:60,
		width:250
	});
	
	var confirmPassword_label = Ti.UI.createLabel({
		color:'#000',
		text:'confirmer le mot de passe',
		height:'auto',
		width:'auto'
	});
	var confirmPassword_input = Ti.UI.createTextField({
		passwordMask:true,
		height:60,
		width:250
	});
	
	var registration_button = Ti.UI.createButton({
		title:'créer un compte',
		height:60,
		width:250
	});
	
	self.add(username_label);
	self.add(username_input);
	self.add(email_label);
	self.add(email_input);
	self.add(password_label);
	self.add(password_input);
	self.add(confirmPassword_label);
	self.add(confirmPassword_input);
	self.add(registration_button);
	
	//Add behavior for UI
	registration_button.addEventListener('click', function(e) {
		var RegistrationController = require('lib/controller/RegistrationController');
		var controller = new RegistrationController(Cloud);
		controller.registerUser(username_input.value,email_input.value, password_input.value, confirmPassword_input.value);
	});
	
	return self;
}

module.exports = RegistrationView;
