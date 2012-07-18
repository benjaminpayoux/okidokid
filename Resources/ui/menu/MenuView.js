function MenuView(dic, MenuWindow) {
	var self = Ti.UI.createView({
		layout: 'vertical',
		backgroundColor: '#3B3B3C'
	});
	
	
	tableData = [];
	
	var row_profile = Ti.UI.createTableViewRow({height: 30});
	var view_profile = Ti.UI.createView({});
	var image_profile = Ti.UI.createImageView({
		image: '/images/ico_profil_menu.png',
		width: 23, height: 21,
		left: 25
	});
	var profile_button = Ti.UI.createLabel({
		text: 'Mon profil',
		color: '#E7E7E9',
		left: 55
	});
	view_profile.add(image_profile);
	view_profile.add(profile_button);
	row_profile.add(view_profile);
	tableData.push(row_profile);
	
	
	var row_children = Ti.UI.createTableViewRow({height: 30});
	var view_children = Ti.UI.createView({});
	var image_children = Ti.UI.createImageView({
		image: '/images/ico_ami_menu.png',
		width: 23, height: 21,
		left: 25
	});
	var children_button = Ti.UI.createLabel({
		text: 'Mes enfants',
		color: '#E7E7E9',
		left: 55
	});
	view_children.add(image_children);
	view_children.add(children_button);
	row_children.add(view_children);
	tableData.push(row_children);
	
	var row_cal = Ti.UI.createTableViewRow({height: 30});
	var view_cal = Ti.UI.createView({});
	var image_cal = Ti.UI.createImageView({
		image: '/images/ico_calendar_menu.png',
		width: 23, height: 21,
		left: 25
	});
	var cal_button = Ti.UI.createLabel({
		text: 'Calendrier',
		color: '#E7E7E9',
		left: 55
	});
	view_cal.add(image_cal);
	view_cal.add(cal_button);
	row_cal.add(view_cal);
	tableData.push(row_cal);
	
	var row_contact = Ti.UI.createTableViewRow({height: 30});
	var view_contact = Ti.UI.createView({});
	var image_contact = Ti.UI.createImageView({
		image: '/images/ico_contact_menu.png',
		width: 23, height: 21,
		left: 25
	});
	var contact_button = Ti.UI.createLabel({
		text: 'Mes contacts',
		color: '#E7E7E9',
		left: 55
	});
	view_contact.add(image_contact);
	view_contact.add(contact_button);
	row_contact.add(view_contact);
	tableData.push(row_contact);
	
	var row_notif = Ti.UI.createTableViewRow({height: 30});
	var view_notif = Ti.UI.createView({});
	var image_notif = Ti.UI.createImageView({
		image: '/images/ico_notif_menu.png',
		width: 23, height: 21,
		left: 25
	});
	var notif_button = Ti.UI.createLabel({
		text: 'Notifications',
		color: '#E7E7E9',
		left: 55
	});
	view_notif.add(image_notif);
	view_notif.add(notif_button);
	row_notif.add(view_notif);
	tableData.push(row_notif);
	
	var row_logout = Ti.UI.createTableViewRow({height: 30});
	var view_logout = Ti.UI.createView({});
	var image_logout = Ti.UI.createImageView({
		image: '/images/ico_deconnexion_menu.png',
		width: 23, height: 21,
		left: 25
	});
	var logout_button = Ti.UI.createLabel({
		text: 'Déconnexion',
		color: '#E7E7E9',
		left: 55
	});
	view_logout.add(image_logout);
	view_logout.add(logout_button);
	row_logout.add(view_logout);
	tableData.push(row_logout);
	
	var row_help = Ti.UI.createTableViewRow({height: 30});
	var view_help = Ti.UI.createView({});
	var image_help = Ti.UI.createImageView({
		image: '/images/ico_aide_menu.png',
		width: 23, height: 21,
		left: 25
	});
	var help_button = Ti.UI.createLabel({
		text: 'Aide',
		color: '#E7E7E9',
		left: 55
	});
	view_help.add(image_help);
	view_help.add(help_button);
	row_help.add(view_help);
	tableData.push(row_help);
	
	
	
	var tableView = Ti.UI.createTableView({top: 100, data: tableData, separatorColor: 'transparent'});
	
	self.add(tableView);
	
	
	contact_button.addEventListener('click', function(e) {
		var ContactListWindow = require('ui/contact/ContactListWindow');
		new ContactListWindow(dic).open();
	});
	
	children_button.addEventListener('click', function(e) {
		var ChildListWindow = require('ui/child/ChildListWindow');
		new ChildListWindow(dic).open();
	});
	
	profile_button.addEventListener('click', function(e) {
		var ProfileWindow = require('ui/ProfileWindow');
		new ProfileWindow(dic).open();
	});
	
	cal_button.addEventListener('click', function(e) {
		var ScheduleWindow = require('ui/schedule/ScheduleWindow');
		new ScheduleWindow(dic).open();
	});
	
	logout_button.addEventListener('click', function(e) {
		dic.activityIndicator.show();
		var AuthController = require('lib/controller/AuthController');
		var controller = new AuthController(dic);
		controller.logoutUser();
	});
	
	return self;
}

module.exports = MenuView;
