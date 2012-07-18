function ContactListView(dic) {
	
	var ContactController = require('lib/controller/ContactController');
	var controller = new ContactController(dic);
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/bg.png',
		layout:'vertical',
		top: 61
	});
	
	var title_label = Ti.UI.createLabel({
		text: 'Mes contacts',
		color: '#3B3B3C',
		font:{fontSize:20, fontWeight:'bold'},
	});
	
	var add_contact = Ti.UI.createButton({
		backgroundImage:'/images/btn/ajouter_contact.png',
		backgroundSelectedImage:'/images/btn/ajouter_contact_hover.png',
		width: 320, height: 28
	});
	
	var sectionWaiting = Ti.UI.createTableViewSection({ headerTitle: 'En attente' });
	var sectionAdd = Ti.UI.createTableViewSection({ headerTitle: 'Ajoutés' });
	var sectionAsking = Ti.UI.createTableViewSection({ headerTitle: 'Demandes' });
	
	var tableView = Ti.UI.createTableView({
      data: [sectionWaiting, sectionAdd, sectionAsking]
    });
    
    self.add(title_label);
	self.add(add_contact);
    self.add(tableView);
	
    add_contact.addEventListener('click', function(e) {
		var ContactSearchWindow = require('ui/contact/ContactSearchWindow');
    	new ContactSearchWindow(dic).open();
	});
	
	Ti.App.addEventListener("addedContactsReturn", function(e) {
		
		for (var i = 0; i < e.contacts.length; i++) {
        	
        	var contact = e.contacts[i];
            var row = Ti.UI.createTableViewRow({
        		className:'contact', // used to improve table performance
		        backgroundImage:'/images/jean-paul_new.png',
		        rowIndex:i, // custom property, useful for determining the row during events
		        height:110
	      	});
	      	
	      	var added_view = Ti.UI.createView({
	      		backgroundColor: '#D73180',
	      	opacity: 0.9,
	      	bottom: 0
	      	});
	      	
	      	var labelUserName = Ti.UI.createLabel({
		        color:'#FFF',
		        font:{fontFamily:'Arial', fontSize:26, fontWeight:'bold'},
		        text:contact.username,
		        right: 10
		      });
		      
		      added_view.add(labelUserName);
		      row.add(added_view);
		      
		      sectionAdd.add(row);
		      
	 	}
		tableView.setData([sectionWaiting, sectionAdd, sectionAsking]); 
	});
	controller.getAddedContacts();
	
	
	Ti.App.addEventListener("waitingContactsReturn", function(e) {	
		for (var i = 0; i < e.contacts.length; i++) {
        	
        	var contact = e.contacts[i];
            var row = Ti.UI.createTableViewRow({
        		className:'contact', // used to improve table performance
		        backgroundImage:'/images/jean-paul_new.png',
		        rowIndex:i, // custom property, useful for determining the row during events
		        height:110
	      	});
	      	
	      	var waitlabelUserName = Ti.UI.createLabel({
		        color:'#576996',
		        font:{fontFamily:'Arial', fontSize:26, fontWeight:'bold'},
		        text:contact.username,
		        left:70, top: 6,
		        width:200, height: 30
		      });
		      row.add(waitlabelUserName);
		      
		      sectionWaiting.add(row);
		      
	 	}
		tableView.setData([sectionWaiting, sectionAdd, sectionAsking]); 
	});
	controller.getWaitingContacts();
	
	Ti.App.addEventListener("askingContactsReturn", function(e) {
		
		for (var i = 0; i < e.contacts.length; i++) {
        	
        	var contact = e.contacts[i];
            var row = Ti.UI.createTableViewRow({
        		className:'contact', // used to improve table performance
		        backgroundImage:'/images/jean-paul_new.png',
		        rowIndex:contact.id, // custom property, useful for determining the row during events
		        height:110
	      	});
	      	
	      	var labelUserName = Ti.UI.createLabel({
		        color:'#576996',
		        text:contact.username,
		        left:70, top: 6,
		        width:200, height: 30
	      	});
	      	row.add(labelUserName);
	      
	      	row.addEventListener('click', function (e) {
	      		controller.confirmContact(e.row.rowIndex);
	      	});
	            
	      	sectionAsking.add(row);
	      
	 	}
		tableView.setData([sectionWaiting, sectionAdd, sectionAsking]); 
	});
	controller.getAskingContacts();
	
	return self;
}

module.exports = ContactListView;