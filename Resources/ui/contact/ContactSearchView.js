function ContactSearchView(dic) {
	
	var ContactController = require('lib/controller/ContactController');
	var controller = new ContactController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
	});
	
	var search = Titanium.UI.createSearchBar({
	    barColor:'#000', 
	    showCancel:true,
	    height:43,
	    top:0,
	});
	
	self.add(create_button);
	
	create_button.addEventListener('click', function(e) {
		var ContactController = require('lib/controller/ContactController');
		var controller = new ContactController(Cloud);
		controller.createRelation();
	});

	return self;
}

module.exports = ContactSearchView;