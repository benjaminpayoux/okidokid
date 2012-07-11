function ActivityController(dic) {
	
	var self = {};
	
	self.addChildActivity = function(child_id, activity_name) {
		dic.cloud.Objects.create({
			classname: 'activities',
			fields: {
				child_id: child_id,
				name: activity_name
			}
		}, function (e) {
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
	
	self.getChildActivities = function(child_id) {
		dic.cloud.Objects.query({
			classname: 'activities',
			where: {
				child_id: child_id
			}
		}, function (e) {
			if (e.success) {
				for (var i = 0; i < e.activities.length; i++) { 
					Ti.App.fireEvent(
			        	"child"+i+"ActivitiesListReturn",
			        	{ 
		        			activities: e.activities
		    		 	}
		        	);
		        }
			} else {
	            alert('Error:\n' +
	                ((e.error && e.message) || JSON.stringify(e)));
	        }
		});
	}
	
	return self;
}

module.exports = ActivityController;
