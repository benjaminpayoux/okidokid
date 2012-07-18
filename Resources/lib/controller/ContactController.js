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
	            status: 1
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
	
	self.confirmContact = function(requester_id) {
		dic.cloud.Objects.query({
			classname: 'relations',
			where: {
				requester_id: requester_id,
				receiver_id: dic.userProfile.id
			}
		}, function (e) {
			if (e.success) {
				dic.cloud.Objects.update({
					classname: 'relations',
					id: e.relations[0].id,
					fields: {
						status: 1
					}
				}, function (e) {
					if (e.success) {
						alert('Contact ajouté !');
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
	
	self.getAddedContacts = function() {
		
		dic.cloud.Objects.query({
			classname: 'relations',
			where: {
				requester_id: dic.userProfile.id,
				status: 1
			}
		}, function (e) {
			if (e.success) {
				
				var contacts_ids = '';
				
				if (e.relations.length > 0) {
					for (var i = 0; i < e.relations.length; i++) {
			        	contacts_ids += e.relations[i].receiver_id + ',';
					}
				}
				
				dic.cloud.Objects.query({
					classname: 'relations',
					where: {
						receiver_id: dic.userProfile.id,
						status: 1
					}
				}, function (e) {
					if (e.success) {
						
						if (e.relations.length > 0) {
							for (var i = 0; i < e.relations.length; i++) {
					        	contacts_ids += e.relations[i].requester_id + ',';
							}
						}
						
						if (contacts_ids !== '') {
							dic.cloud.Users.show({
				        		user_ids: contacts_ids
				        	}, function (e) {
				        		if (e.success) {
				        			Ti.App.fireEvent(
							        	"addedContactsReturn",
							        	{ 
						        			contacts: e.users
						    		 	}
						        	);
				        		} else {
							        alert('Error:\n' +
							            ((e.error && e.message) || JSON.stringify(e)));
							    }
				        	});
			        	}
						
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
	}
	
	self.getAskingContacts = function() {
		
		// on cherche tous les liens nous concernant (notre id correspond au champ requester_id)
		dic.cloud.Objects.query({
		    classname: 'relations',
		    where: {
		    	receiver_id: dic.userProfile.id,
		    	status: 0
		    }
	   	}, function (e) {
	   		if (e.success) {
		        if (e.relations.length > 0) {
		        	var requester_ids = '';
			        for (var i = 0; i < e.relations.length; i++) {
			        	requester_ids += e.relations[i].requester_id + ',';
					}	
			        
			        dic.cloud.Users.show({
		        		user_ids: requester_ids
		        	}, function (e) {
		        		if (e.success) {
		        			Ti.App.fireEvent(
					        	"askingContactsReturn",
					        	{ 
				        			contacts: e.users
				    		 	}
				        	);
		        		} else {
					        alert('Error:\n' +
					            ((e.error && e.message) || JSON.stringify(e)));
					    }
		        	});
	        	}
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	}
	
	self.getWaitingContacts = function() {
		
		// on cherche tous les liens nous concernant (notre id correspond au champ requester_id)
		dic.cloud.Objects.query({
		    classname: 'relations',
		    where: {
		    	requester_id: dic.userProfile.id,
		    	status: 0
		    }
	   	}, function (e) {
	   		if (e.success) {
		        if (e.relations.length > 0) {
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
	        	}
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	}
	
	return self;
}

module.exports = ContactController;
