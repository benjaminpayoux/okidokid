function Step6View(scrollableView, dic) {
	
	var AlertController = require('lib/controller/AlertController');
	var alertController = new AlertController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 61
	});
	
	var stepImage = Ti.UI.createImageView({
		url: '/images/step6.png'
	});
	
	var label = Ti.UI.createLabel({
		text: 'Step3'
	});
	
	var alertValidButton = Ti.UI.createButton({
		backgroundImage:'/images/btn/btn_confirmalert.png',
		backgroundSelectedImage:'/images/btn/btn_confirmalert_hover.png',
		width: 250, height: 31
	})
	
	self.add(stepImage);
    self.add(label);
    
    
    Ti.App.addEventListener("validateAlert", function(e) {
		
		var alert = e.alert;
		
		var child = Ti.UI.createLabel({
			text: alert.child.name
		});
		
		var start_activity = Ti.UI.createLabel({
			text: alert.start_activity.name
		});
		
		var date_alert = Ti.UI.createLabel({
			text: alert.date_alert
		});
		
		var end_activity = Ti.UI.createLabel({
			text: alert.end_activity.name
		});
		
		var notes = Ti.UI.createLabel({
			text: alert.notes
		});
		
		self.add(child);
		self.add(start_activity);
		self.add(date_alert);
		self.add(end_activity);
		self.add(notes);
		
		self.add(alertValidButton);
		
		alertValidButton.addEventListener('click', function (e) {
			dic.activityIndicator.show();
			alertController.createAlert(alert);
		});
	});
	
	
    
    var previous_button = Ti.UI.createButton({
		title:'previous'
	});
	previous_button.addEventListener('click', function (e) {
		scrollableView.scrollToView(4);
	});
	self.add(previous_button);
    
	return self;
}

module.exports = Step6View;