function Step4View(scrollableView, dic) {
	
	var ActivityController = require('lib/controller/ActivityController');
	var controller = new ActivityController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 61
	});
	
	var stepImage = Ti.UI.createImageView({
		url: '/images/step4.png'
	});
	
	var label = Ti.UI.createLabel({
		text: 'Step3'
	});
	
	
	
	self.add(stepImage);
    self.add(label);
    
    
    Ti.App.addEventListener("childActivitiesListReturn", function(e) {
		for (var i = 0; i < e.activities.length; i++) {
			
			var activity = e.activities[i];
			
			var activityPicto = Ti.UI.createButton({
				title: activity.name,
				activity: activity
			});
			
			activityPicto.addEventListener('click', function(e) {
				dic.currentAlert.end_activity = e.source.activity;
				scrollableView.scrollToView(4);
			});
			
			self.add(activityPicto);
			
			
		}
	});
	
	
	var previous_button = Ti.UI.createButton({
		title:'previous'
	});
	previous_button.addEventListener('click', function (e) {
		scrollableView.scrollToView(2);
	});
	self.add(previous_button);
    
	return self;
}

module.exports = Step4View;