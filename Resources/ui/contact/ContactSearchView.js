function ContactSearchView(dic) {
	
	var ContactController = require('lib/controller/ContactController');
	var contactController = new ContactController(dic);
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/bg.png',
		layout:'vertical',
	});
	
	var search = Titanium.UI.createTextField({
	    width:250,
	    top: 67
	});
	
	var search_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/btn_rechercher.png',
		backgroundSelectedImage:'/images/btn/btn_rechercher_hover.png',
		width: 250, height: 31
	});
	
	var tableView = Ti.UI.createTableView({
      //backgroundColor:'white',
      //zIndex: 200
    });
	
	self.add(search);
	self.add(search_button);
	self.add(tableView);
	
	search_button.addEventListener('click', function(e) {
		dic.activityIndicator.show();
		contactController.searchContact(search.value);
	});
	
	Ti.App.addEventListener("contactSearchReturn", function(e) {
		var user = e.users[0];
		var row = Ti.UI.createTableViewRow({
	        className:'forumEvent', // used to improve table performance
	        backgroundImage:'/images/jean-paul_new.png',
	        //rowIndex:i, // custom property, useful for determining the row during events
	        height:110
	      });
	      
	      var user_view = Ti.UI.createView({
	      	backgroundColor: '#D73180',
	      	opacity: 0.9,
	      	bottom: 0
	      });
	      
	      var labelUserName = Ti.UI.createLabel({
        color:'#FFF',
        font:{fontSize:26, fontWeight:'bold'},
        text:user.username,
        right: 10
      });
      
      user_view.add(labelUserName);
      row.add(user_view);
      
      	row.addEventListener('click', function(e) {
			dic.activityIndicator.show();
			contactController.addContact(user.id);
      	});
      
      tableView.setData([row]);
	});
	
	return self;
}

module.exports = ContactSearchView;