function Step1View(dic) {
	
	var ChildController = require('lib/controller/ChildController');
	var childController = new ChildController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 67
	});
	
	var stepImage = Ti.UI.createImageView({
		url: '/images/step1.png'
	});
	
	var titleLabel = Ti.UI.createLabel
	
	Ti.App.addEventListener("childListReturn", function(e) {
		for (var i = 0; i < e.childs.length; i++) {
			var childPortrait = Ti.UI.createButton({
				title: e.childs[i].name
			});
			
			self.add(childPortrait);
		}
	});
	childController.getChilds();
	
	self.add(stepImage);
    
	return self;
}

module.exports = Step1View;