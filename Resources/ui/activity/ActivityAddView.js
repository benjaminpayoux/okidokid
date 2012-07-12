function ActivityAddView(dic) {
	
	var ActivityController = require('lib/controller/ActivityController');
	var controller = new ActivityController(dic);
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/bg.png',
		layout:'vertical',
		top: 67
	});
	
	// champs du formulaire d'ajout d'une activité
	var activity_name_textfield = Ti.UI.createTextField({
		hintText: 'nom de l\'activité',
		width: 250
	})
	
	var activity_location_textfield = Ti.UI.createTextField({
		hintText: 'lieu',
		width: 250
	})
	
	var picker = Ti.UI.createPicker({
      type:Ti.UI.PICKER_TYPE_DATE,
      minDate:new Date(2009,0,1),
      maxDate:new Date(2014,11,31),
      value:new Date(2014,3,12)
    });
	
	var activity_date_textfield = Ti.UI.createLabel({
		text: 'date',
		width: 250
	})
	
	var activity_hour_textfield = Ti.UI.createTextField({
		hintText: 'heure',
		width: 250
	})
	
	var activity_duration_textfield = Ti.UI.createTextField({
		hintText: 'durée',
		width: 250
	})
	
	var activity_all_day_switch = Ti.UI.createSwitch({
      style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
      textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
      title:'journée entière',
      width: 250 // necessary for textAlign to be effective
    });
	
	
	var activity_freq_textfield = Ti.UI.createTextField({
		hintText: 'fréquence'
	})
	
	var add_activity_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/btn_enregistrer.png',
		backgroundSelectedImage:'/images/btn/btn_enregistrer_hover.png',
		width: 250, height: 31
	});
	
	self.add(activity_name_textfield);
	self.add(activity_location_textfield);
	self.add(activity_date_textfield);
	self.add(activity_hour_textfield);
    self.add(activity_duration_textfield);
    self.add(activity_all_day_switch);
    self.add(activity_freq_textfield);
    self.add(add_activity_button);
    
    activity_date_textfield.addEventListener('click', function(e) {
    	picker.showDatePickerDialog({
	      value: new Date(2010,8,1),
	      callback: function(e) {
	        if (e.cancel) {
	          Ti.API.info('User canceled dialog');
	        } else {
	          Ti.API.info('User selected date: ' + e.value);
	        }
	      }
	    });
    });
    
    add_activity_button.addEventListener('click', function(e) {
		dic.activityIndicator.show();
		controller.addChildActivity(
			dic.currentChild, 
			activity_name_textfield.value,
			activity_location_textfield
		);
	});
	
	return self;
}

module.exports = ActivityAddView;