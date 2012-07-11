function ContactListView(dic) {
	
	var ContactController = require('lib/controller/ContactController');
	var controller = new ContactController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 80
	});
	
	var nouveau_contact = Ti.UI.createButton({
		title: 'Nouveau contact',
		height: 40
	});
	
	var sectionWaiting = Ti.UI.createTableViewSection({ headerTitle: 'En attente' });
	
	var sectionAdd = Ti.UI.createTableViewSection({ headerTitle: 'Ajoutés' });
	
	var tableView = Ti.UI.createTableView({
      data: [sectionWaiting, sectionAdd],
      backgroundColor:'white'
    });
	
	self.add(nouveau_contact);
    self.add(tableView);
	
    nouveau_contact.addEventListener('click', function(e) {
		var ContactSearchWindow = require('ui/contact/ContactSearchWindow');
    	new ContactSearchWindow(dic).open();
	});
	
	Ti.App.addEventListener("waitingContactsReturn", function(e) {
		
		for (var i = 0; i < e.contacts.length; i++) {
        	
        	var contact = e.contacts[i];
            var row = Ti.UI.createTableViewRow({
        		className:'contact', // used to improve table performance
		        backgroundImage:'/images/logo-okidokid.png',
		        rowIndex:i, // custom property, useful for determining the row during events
		        height:110
	      	});
	      	
	      	var labelUserName = Ti.UI.createLabel({
		        color:'#576996',
		        font:{fontFamily:'Arial', fontSize:26, fontWeight:'bold'},
		        text:'nom:'+contact.username,
		        left:70, top: 6,
		        width:200, height: 30
		      });
		      row.add(labelUserName);
		      
		      sectionWaiting.add(row);
		      
	 	}
		tableView.setData([sectionWaiting, sectionAdd]); 
	});
	controller.getWaitingContacts();
	
	return self;
}

module.exports = ContactListView;