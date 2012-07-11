function ChildAddView(dic) {
	
	var ChildController = require('lib/controller/ChildController');
	var controller = new ChildController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 67
	});
	
	var child_name_textfield = Ti.UI.createTextField({
		hintText: 'Nom de l\'enfant'
	})
	
	var add_child_button = Ti.UI.createButton({
		title: 'Ajouter'
	});
	
    
    self.add(child_name_textfield);
    self.add(add_child_button);
    
    add_child_button.addEventListener('click', function(e) {
		dic.activityIndicator.show();
		var childController = new ChildController(dic);
		childController.addChild(child_name_textfield.value);
	});
	
	return self;
}

module.exports = ChildAddView;