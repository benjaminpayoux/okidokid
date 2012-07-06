//FirstView Component Constructor
function RegistrationController(Cloud) {
	//create object instance, a parasitic subclass of Observable
	var self = {};
	
	self.registerUser = function(username, email, password, confirmPassword) {
		// example assumes you have a set of text fields named username, password, etc.
		Cloud.Users.create({
		    username: username,
		    email: email,
		    password: password,
		    password_confirmation: confirmPassword,
		}, function (e) {
		    if (e.success) {
				// user created successfully
				var ProfileWindow = require('ui/ProfileWindow');
				new ProfileWindow(Cloud).open();
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	}
	
	return self;
}

module.exports = RegistrationController;
