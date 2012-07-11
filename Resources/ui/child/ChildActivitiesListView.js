function ChildActivitiesListView(dic, child) {
	
	var self = Ti.UI.createView({
		layout:'vertical'
	});
	
	var childActivities = [];
	
	for (var j = 0; j < child.activities.length; j++) {
		var activity = child.activities[j];
		
		var activityRow = Ti.UI.createTableViewRow({
    		title: activity.name,
    		className:'activity', // used to improve table performance
	        rowIndex: j	, // custom property, useful for determining the row during events
	        //height: 50
      	});
      	
      	var labelActivityName = Ti.UI.createLabel({
      		color:'#576996',
	        font:{fontFamily:'Arial', fontSize:26, fontWeight:'bold'},
	        text:'activite: ' + activity.name,
	        width:200, height: 30
      	});
      	
      	activityRow.add(labelActivityName);
      	
      	childActivities.push(activityRow);
	}
	
	var addActivityRow = Ti.UI.createTableViewRow({
		title: 'Ajouter une activité',
		//rowIndex: act.activities.length + 1
	});
	
	addActivityRow.addEventListener('click', function (e) {
  		dic.currentChild = child.id;
  		var ActivityAddWindow = require('ui/activity/ActivityAddWindow');
  		new ActivityAddWindow(dic).open();
  	});
	
	childActivities.push(addActivityRow);
	
	var childActivitiesTableView = Ti.UI.createTableView({
      	backgroundColor: '#D9478A',
      	data: childActivities
    });
    
    self.add(childActivitiesTableView);
    
	return self;
}

module.exports = ChildActivitiesListView;