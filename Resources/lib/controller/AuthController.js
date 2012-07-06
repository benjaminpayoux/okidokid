//FirstView Component Constructor
function AuthController(Cloud) {
	//create object instance, a parasitic subclass of Observable
	var self = {};
	
	self.loginUser = function(username, password) {
		// example assumes you have a set of text fields named username, password, etc.
		Cloud.Users.login({
		    login: username,
		    password: password
		}, function (e) {
		    if (e.success) {
		        var user = e.users[0];
		        // alert('Success:\n' +
		            // 'id: ' + user.id + '\n' +
		            // 'first name: ' + user.first_name + '\n' +
		            // 'last name: ' + user.last_name);
	            //Ti.UI.currentWindow.close();
	            var ScheduleWindow = require('ui/ScheduleWindow');
				new ScheduleWindow(Cloud).open();
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	}
	
	self.logoutUser = function() {
		// example assumes you have a set of text fields named username, password, etc.
		Cloud.Users.logout(function (e) {
	        if (e.success) {
	            alert('Success: Logged out');
	            var AuthWindow = require('ui/AuthWindow');
				new AuthWindow(Cloud).open();
	        } else {
	            alert('Error:\n' +
	                ((e.error && e.message) || JSON.stringify(e)));
	        }
	    });
	}
	
	self.isLogged = function() {
		Cloud.Users.showMe(function (event) {
		    Ti.App.fireEvent(
	        	"isLogged.return",
	        	{ retour: (event.success) ? true : false }
        	);
		});
	}
	
	self.debugLog = function() {
		Cloud.Users.showMe(function (event) {
		    Ti.App.fireEvent(
	        	"debug.return",
	        	{ retour: (event.success) ? true : false }
        	);
		});
	}
	
	return self;
}

module.exports = AuthController;
