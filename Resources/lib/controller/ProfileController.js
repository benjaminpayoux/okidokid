//FirstView Component Constructor
function ProfileController(Cloud) {
	//create object instance, a parasitic subclass of Observable
	var self = {};
	
	self.getProfile = function() {
		Cloud.Users.showMe(function (e) {
		    if (e.success) {
		        var user = e.users[0];
		        alert('Success:\n' +
		            'id: ' + user.id + '\n' +
		            'username: ' + user.username + '\n' +
		            'email: ' + user.email);
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	}
	
	return self;
}

module.exports = ProfileController;
