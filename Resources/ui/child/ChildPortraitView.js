function ChildPortraitView(dic, child) {
	
	var self = Ti.UI.createView({
		layout:'vertical'
	});
	
	var labelChildName = Ti.UI.createLabel({
  		color:'#576996',
        font:{fontFamily:'Arial', fontSize:26, fontWeight:'bold'},
        text:'enfant: ' + child.name,
        width:200, height: 30
  	});
  	
  	self.add(labelChildName);
  	
  	var ChildActivitiesListView = require('ui/child/ChildActivitiesListView');
  	var childActivitiesListView = new ChildActivitiesListView(dic, child);
	self.add(childActivitiesListView);
	
	return self;
}

module.exports = ChildPortraitView;