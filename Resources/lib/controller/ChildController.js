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
	
	self.delChild = function(child) {
		dic.cloud.Objects.remove({
	        classname: 'childs',
	        id: child.id
	    }, function (e) {
	        if (e.success) {
	            alert('Success');
	        } else {
	            alert('Error:\\n' +
	                ((e.error && e.message) || JSON.stringify(e)));
	        }
	    });
	}
	
	self.getChildPhoto = function(child) {
		
		dic.cloud.Photos.show({
	        photo_id: child.photo_id
	    }, function (e) {
	        if (e.success) {
	            var photo = e.photos[0];
	            Ti.App.fireEvent(
		        	"childPhotoReturn",
		        	{ 
	        			photo: photo
	    		 	}
	        	);
	        } else {
	            alert('Error:\\n' +
	                ((e.error && e.message) || JSON.stringify(e)));
	        }
	    });
	}
	
	self.getChilds = function() {
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
	
	self.addChild = function(photo, child_name) {
		
		dic.cloud.Photos.create({
	        photo: photo
	    }, function (e) {
	        if (e.success) {
	            var photo = e.photos[0];
	            
	            dic.cloud.Objects.create({
					classname: 'childs',
					fields: {
						name: child_name,
						photo_id: photo.id
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
	        } else {
	            alert('Error:\\n' +
	                ((e.error && e.message) || JSON.stringify(e)));
	        }
	    });
		
		
		
	}
	
	return self;
}

module.exports = ContactController;
