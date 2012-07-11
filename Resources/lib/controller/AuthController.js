function AuthController(dic) {
	//create object instance, a parasitic subclass of Observable
	var self = {};
	
	self.loginUser = function(username, password) {
		// example assumes you have a set of text fields named username, password, etc.
		dic.cloud.Users.login({
		    login: username,
		    password: password
		}, function (e) {
		    dic.activityIndicator.hide();
		    if (e.success) {
	            dic.userProfile = e.users[0];
	            var ScheduleWindow = require('ui/schedule/ScheduleWindow');
				new ScheduleWindow(dic).open();
		    }
		    else {
		        alert('Code:' + e.code + ' Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	}
	
	self.logoutUser = function() {
		// example assumes you have a set of text fields named username, password, etc.
		dic.cloud.Users.logout(function (e) {
	        dic.activityIndicator.hide();
	        if (e.success) {
	            var AuthWindow = require('ui/AuthWindow');
				new AuthWindow(dic).open();
	        } else {
	            alert('Error:\n' +
	                ((e.error && e.message) || JSON.stringify(e)));
	        }
	    });
	}
	
	self.isLogged = function() {
		dic.cloud.Users.showMe(function(e) {
		    Ti.App.fireEvent(
	        	"isLogged",
	        	{ 
        			isLogged: (e.success) ? true : false,
        			userProfile: (e.success) ? e.users[0] : ""
    		 	}
        	);
		});
	}
	
	self.debugLog = function() {
		dic.cloud.Users.showMe(function (event) {
		    Ti.App.fireEvent(
	        	"debug.return",
	        	{ retour: (event.success) ? true : false }
        	);
		});
	}
	
	return self;
}

module.exports = AuthController;
