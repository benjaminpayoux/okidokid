//FirstView Component Constructor
function ContactController(dic) {
	//create object instance, a parasitic subclass of Observable
	var self = {};
	
	self.getChildsAndActivities = function() {
		
		Ti.App.addEventListener("childListReturn", function(e) {
			var childs = e.childs;
			var childs_ids = [];
			for (var i = 0; i < e.childs.length; i++) {
				childs_ids.push(e.childs[i].id);
			}
			
			dic.cloud.Objects.query({
				classname: 'activities',
				ids: childs_ids
			}, function(e) {
				if (e.success) {
					
					for (var i = 0; i < childs.length; i++) {
						var activities = [];
						for (var j = 0; j < e.activities.length; j++) {
							if (e.activities[j].child_id === childs[i].id) {
								activities.push(e.activities[j]);
							}
						}
						childs[i].activities = activities;
					}
					Ti.App.fireEvent(
			        	"childsAndActivitiesReturn",
			        	{ 
		        			childs: childs
		    		 	}
		        	);
				} else {
		            alert('Error:\n' +
		                ((e.error && e.message) || JSON.stringify(e)));
		        }
			});
		});
		
		dic.cloud.Objects.query({
			classname: 'childs',
			where: {
				user_id: dic.userProfile.id
			}
		}, function(e) {
			if (e.success) {
				Ti.App.fireEvent(
		        	"childListReturn",
		        	{ 
	        			childs: e.childs
	    		 	}
	        	);
			} else {
	            alert('Error:\n' +
	                ((e.error && e.message) || JSON.stringify(e)));
	        }
		});
	}
	
	self.addChild = function(child_name) {
		dic.cloud.Objects.create({
			classname: 'childs',
			fields: {
				name: child_name
			}
		}, function(e) {
			dic.activityIndicator.hide();
			if (e.success) {
				var ChildListWindow = require('ui/child/ChildListWindow');
				new ChildListWindow(dic).open();
			} else {
	            alert('Error:\n' +
	                ((e.error && e.message) || JSON.stringify(e)));
	        }
		});
	}
	
	return self;
}

module.exports = ContactController;
