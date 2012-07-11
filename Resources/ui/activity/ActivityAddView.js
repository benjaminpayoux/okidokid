function ActivityAddView(dic) {
	
	var ActivityController = require('lib/controller/ActivityController');
	var controller = new ActivityController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 67
	});
	
	var activity_name_textfield = Ti.UI.createTextField({
		hintText: 'Nom de l\'activité'
	})
	
	var activity_location_textfield = Ti.UI.createTextField({
		hintText: 'Lieu'
	})
	
	var activity_date_textfield = Ti.UI.createTextField({
		hintText: 'Date'
	})
	
	var activity_hour_textfield = Ti.UI.createTextField({
		hintText: 'Heure'
	})
	
	var activity_duration_textfield = Ti.UI.createTextField({
		hintText: 'Durée'
	})
	
	var activity_all_day_textfield = Ti.UI.createTextField({
		hintText: 'Journée entière'
	})
	
	var activity_freq_textfield = Ti.UI.createTextField({
		hintText: 'Fréquence'
	})
	
	var add_activity_button = Ti.UI.createButton({
		title: 'Ajouter'
	});
	
	self.add(activity_name_textfield);
	self.add(activity_location_textfield);
	self.add(activity_date_textfield);
	self.add(activity_hour_textfield);
    self.add(activity_duration_textfield);
    self.add(activity_all_day_textfield);
    self.add(activity_freq_textfield);
    self.add(add_activity_button);
    
    add_activity_button.addEventListener('click', function(e) {
		dic.activityIndicator.show();
		controller.addChildActivity(dic.currentChild, activity_name_textfield.value);
	});
	
	return self;
}

module.exports = ActivityAddView;