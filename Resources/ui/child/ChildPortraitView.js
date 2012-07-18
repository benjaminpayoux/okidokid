function ChildPortraitView(dic, child) {
	
	var ChildController = require('lib/controller/ChildController');
	var childController = new ChildController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		backgroundImage: child.photo,
		width: Ti.UI.FILL, height: 427
	});
	
	
  	
  	var del_button = Ti.UI.createButton({
  		title: 'Supprimer'
  	});
  	
  	
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