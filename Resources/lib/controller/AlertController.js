function AlertController(dic) {
	
	var self = {};
	
	self.createAlert = function(alert) {
		dic.cloud.Objects.create({
			classname: 'alerts',
			fields: {
				child_id: alert.child.id,
				start_activity_id: alert.start_activity.id,
				end_activity_id: alert.end_activity.id,
				date_alert: alert.date_alert,
				notes: alert.notes
			}
		}, function(e) {
			dic.activityIndicator.hide();
			if (e.success) {
				alert('success');
			} else {
	            alert('Error:\n' +
	                ((e.error && e.message) || JSON.stringify(e)));
	        }
		});
	}
	
	return self;
}

module.exports = AlertController;
