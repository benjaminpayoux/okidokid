//FirstView Component Constructor
function ContactController(Cloud) {
	//create object instance, a parasitic subclass of Observable
	var self = {};
	
	self.createRelation = function(requester_id, receiver_id) {
		Cloud.Objects.create({
	        classname: 'relations',
	        fields: {
	            requester_id: requester_id,
            	receiver_id: receiver_id,
	            status: 1
	        }
	    }, function (e) {
	        if (e.success) {
	            var relation = e.relations[0];
	            alert('Success:\n' +
	                'id: ' + relation.id + '\n' +
	                'requester_id: ' + relation.requester_id + '\n' +
	                'receiver_id: ' + relation.receiver_id);
	        } else {
	            alert('Error:\n' +
	                ((e.error && e.message) || JSON.stringify(e)));
	        }
	    });
	}
	
	self.getContacts = function() {
		Cloud.Users.showMe(function (e) {
		    if (e.success) {
		        
		        Ti.App.fireEvent(
		        	"profile.return",
		        	{ retour: e.users[0] }
	        	);
		        
		        
		        /*var user = e.users[0];
		        alert('Success:\n' +
		            'id: ' + user.id + '\n' +
		            'username: ' + user.username + '\n' +
		            'email: ' + user.email);*/
		    } /*else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }*/
		});
	}
	
	return self;
}

module.exports = ContactController;
