function ChildListView(dic) {
	
	var ChildController = require('lib/controller/ChildController');
	var childController = new ChildController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 67
	});
	
	var new_child_button = Ti.UI.createButton({
		title: 'Ajouter un enfant'
	});
	
    self.add(new_child_button);
    
    new_child_button.addEventListener('click', function(e) {
		var ChildAddWindow = require('ui/child/ChildAddWindow');
    	new ChildAddWindow(dic).open();
	});
	
	Ti.App.addEventListener("childsAndActivitiesReturn", function(e) {
		
		var childsTab = [];
		
		for (var i = 0; i < e.childs.length; i++) {
			
			var child = e.childs[i];
			
			var childRow = Ti.UI.createTableViewRow({
	    		className:'child', // used to improve table performance
		        //height:110
	      	});
	      	
	      	var ChildPortraitView = require('ui/child/ChildPortraitView');
		  	var childPortraitView = new ChildPortraitView(dic, child);
			childRow.add(childPortraitView);
	      	
	      	childsTab.push(childRow);
		}
		
		var childrenTableView = Ti.UI.createTableView({
	      	backgroundColor: '#C6A999',
	      	data: childsTab
	    });
      	
      	self.add(childrenTableView);
	});
	childController.getChildsAndActivities();
	      		
	return self;
}

module.exports = ChildListView;