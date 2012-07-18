function ChildListView(dic) {
	
	var ChildController = require('lib/controller/ChildController');
	var childController = new ChildController(dic);
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/bg.png',
		layout:'vertical',
		top: 61
	});
	
	var new_child_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/ajouter_enfant.png',
		backgroundSelectedImage:'/images/btn/ajouter_enfant_hover.png',
		width: 320, height: 28
	});
	
	var title_label = Ti.UI.createLabel({
		text: 'Mes enfants',
		color: '#3B3B3C',
		font:{fontSize:20, fontWeight:'bold'},
	});
	
	self.add(title_label);
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
		        height: 427
	      	});
	      	
	      	var ChildPortraitView = require('ui/child/ChildPortraitView');
		  	var childPortraitView = new ChildPortraitView(dic, child);
			childRow.add(childPortraitView);
	      	
	      	childsTab.push(childRow);
		}
		
		var childrenTableView = Ti.UI.createTableView({
	      	data: childsTab,
	      	separatorColor: 'transparent'
	    });
      	
      	self.add(childrenTableView);
	});
	childController.getChildsAndActivities();
	      		
	return self;
}

module.exports = ChildListView;