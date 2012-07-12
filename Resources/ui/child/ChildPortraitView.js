function ChildPortraitView(dic, child) {
	
	var ChildController = require('lib/controller/ChildController');
	var childController = new ChildController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical'
	});
	
	Ti.App.addEventListener("childPhotoReturn", function(e) {
		self.setBackgroundImage(e.photo.urls.square_75);
	});
	childController.getChildPhoto(child)
	
	var labelChildName = Ti.UI.createLabel({
  		color:'#576996',
        font:{fontFamily:'Arial', fontSize:26, fontWeight:'bold'},
        text:'enfant: ' + child.name,
        width:200, height: 30
  	});
  	
  	var del_button = Ti.UI.createButton({
  		title: 'Supprimer'
  	});
  	
  	self.add(labelChildName);
  	self.add(del_button);
  	
  	var ChildActivitiesListView = require('ui/child/ChildActivitiesListView');
  	var childActivitiesListView = new ChildActivitiesListView(dic, child);
	self.add(childActivitiesListView);
	
	del_button.addEventListener('click', function (e) {
		childController.delChild(child);
	});
	
	return self;
}

module.exports = ChildPortraitView;