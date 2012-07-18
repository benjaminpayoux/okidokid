function ChildActivitiesListView(dic, child) {
	
	var self = Ti.UI.createView({
		layout:'vertical',
		backgroundColor: '#D73180',
		opacity: 0.9,
		top: 180
	});
	
	var labelChildName = Ti.UI.createLabel({
  		color:'#FFF',
        font:{fontSize:26, fontWeight:'bold'},
        text: child.name,
        left: 10
  	});
  	self.add(labelChildName);
	
	var childActivities = [];
	
	if (child.activities.length > 0) {
		for (var j = 0; j < child.activities.length; j++) {
			var activity = child.activities[j];
			
			var activityRow = Ti.UI.createTableViewRow({
	    		className:'activity', // used to improve table performance
		        rowIndex: activity.id, // custom property, useful for determining the row during events
		        height: 25
	      	});
	      	
	      	var view_activity = Ti.UI.createView({
	      		//layout: 'horizontal'
	      	});
	      	
	      	var labelActivityName = Ti.UI.createLabel({
	      		color:'#FFF',
		        font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
		        text: activity.name,
		        left: 15
	      	});
	      	
	      	var image_detail = Ti.UI.createImageView({
	      		image: '/images/ico_arrow_right_w.png',
	      		width: 12, height: 10,
	      		right: 15
	      	});
	      	
	      	view_activity.add(labelActivityName);
	      	view_activity.add(image_detail);
	      	
	      	activityRow.add(view_activity);
	      	
	      	childActivities.push(activityRow);
		}
	}
	
	var addActivityRow = Ti.UI.createTableViewRow({
		className:'activity', // used to improve table performance
        height: 25
	});
	
	var add_activity_view = Ti.UI.createView({
		layout: 'horizontal'
	});
	
	var image_add_activity = Ti.UI.createImageView({
		image: '/images/ico_addlocation_w.png',
		width: 18, height: 18,
		left: 15
	});
	
	var label_add_activity = Ti.UI.createLabel({
		text: 'ajouter une activité',
		color:'#FFF',
        font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
		left: 5
	});
	
	add_activity_view.add(image_add_activity);
	add_activity_view.add(label_add_activity);
	
	addActivityRow.add(add_activity_view);
		
	addActivityRow.addEventListener('click', function (e) {
  		dic.currentChild = child.id;
  		var ActivityAddWindow = require('ui/activity/ActivityAddWindow');
  		new ActivityAddWindow(dic).open();
  	});
	
	childActivities.push(addActivityRow);
	
	var childActivitiesTableView = Ti.UI.createTableView({
      	separatorColor: '#E7E7E9',
      	data: childActivities
    });
    
    self.add(childActivitiesTableView);
    
	return self;
}

module.exports = ChildActivitiesListView;