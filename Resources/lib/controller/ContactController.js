//FirstView Component Constructor
function ContactController(dic) {
	//create object instance, a parasitic subclass of Observable
	var self = {};
	
	self.addContact = function(receiver_id) {
		dic.cloud.Objects.create({
			classname: 'relations',
			fields: {
	            requester_id: dic.userProfile.id,
            	receiver_id: receiver_id,
	            status: 0
	        }
		}, function (e) {
			dic.activityIndicator.hide();
			if (e.success) {
	            var ContactListWindow = require('ui/contact/ContactListWindow');
	            new ContactListWindow(dic).open();
	        } else {
	            alert('Error:\n' +
	                ((e.error && e.message) || JSON.stringify(e)));
	        }
		});
	}
	
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
	
	self.searchContact = function(searchValue) {
		dic.cloud.Users.search({
	        q: searchValue
	    }, function (e) {
	        dic.activityIndicator.hide();
	        if (e.success) {
	            Ti.App.fireEvent(
		        	"contactSearchReturn",
		        	{ 
	        			users: e.users
	    		 	}
	        	);
	        } else {
	            alert('Error:\n' +
	                ((e.error && e.message) || JSON.stringify(e)));
	        }
	    });
	}
	
	self.getContacts = function() {
		var waitingContacts = self.getWaitingContacts();
		alert("taille" + waitingContacts.length);
		//alert(waitingContacts[0].username);
	}
	
	self.getWaitingContacts = function() {
		
		var waitingContacts = [];
		
		// on cherche tous les liens nous concernant (notre id correspond au champ requester_id)
		dic.cloud.Objects.query({
		    classname: 'relations',
		    where: {
		    	requester_id: dic.userProfile.id,
		    	status: 0
		    }
	   	}, function (e) {
	   		if (e.success) {
		        
	        	var receivers_ids = '';
		        for (var i = 0; i < e.relations.length; i++) {
		        	receivers_ids += e.relations[i].receiver_id + ',';
				}	
		        
		        dic.cloud.Users.show({
	        		user_ids: receivers_ids
	        	}, function (e) {
	        		if (e.success) {
	        			Ti.App.fireEvent(
				        	"waitingContactsReturn",
				        	{ 
			        			contacts: e.users
			    		 	}
			        	);
	        		} else {
				        alert('Error:\n' +
				            ((e.error && e.message) || JSON.stringify(e)));
				    }
	        	});
		        
		        
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
		
		return waitingContacts;
	}
	
	return self;
}

module.exports = ContactController;
