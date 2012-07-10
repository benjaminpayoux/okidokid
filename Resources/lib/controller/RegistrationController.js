function RegistrationController(dic) {
	
	var self = {};
	
	self.registerUser = function(username, email, password, confirmPassword) {
		dic.cloud.Users.create({
		    username: username,
		    email: email,
		    password: password,
		    password_confirmation: confirmPassword,
		}, function (e) {
		    dic.activityIndicator.hide();
		    if (e.success) {
				dic.userProfile = e.users[0];
				var ProfileWindow = require('ui/ProfileWindow');
				new ProfileWindow(dic).open();
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	}
	
	return self;
}

module.exports = RegistrationController;