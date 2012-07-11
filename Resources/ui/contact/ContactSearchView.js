function ContactSearchView(dic) {
	
	var ContactController = require('lib/controller/ContactController');
	
	var ContactController = require('lib/controller/ContactController');
	var controller = new ContactController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
	});
	
	var search = Titanium.UI.createSearchBar({
	    barColor:'#000', 
	    showCancel:true,
	    height:80,
	    top: 80,
	});
	
	var tableView = Ti.UI.createTableView({
      backgroundColor:'white',
      top: 200,
      zIndex: 200
    });
	
	self.add(search);
	self.add(tableView);
	
	search.addEventListener('return', function(e) {
		dic.activityIndicator.show();
		var contactController = new ContactController(dic);
		contactController.searchContact(e.value);
	});
	
	Ti.App.addEventListener("contactSearchReturn", function(e) {
		var user = e.users[0];
		var row = Ti.UI.createTableViewRow({
	        className:'forumEvent', // used to improve table performance
	        backgroundImage:'/images/logo-okidokid.png',
	        //rowIndex:i, // custom property, useful for determining the row during events
	        height:110
	      });
	      
	      var labelUserName = Ti.UI.createLabel({
        color:'#576996',
        font:{fontFamily:'Arial', fontSize:26, fontWeight:'bold'},
        text:user.username,
        left:70, top: 6,
        width:200, height: 30
      });
      row.add(labelUserName);
      
      	row.addEventListener('click', function(e) {
			dic.activityIndicator.show();
			controller.addContact(user.id);
      	});
      
      tableView.setData([row]);
      
      alert('row added !');
	});
	
	return self;
}

module.exports = ContactSearchView;