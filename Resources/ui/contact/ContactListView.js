function ContactListView(dic) {
	
	var ContactController = require('lib/controller/ContactController');
	var controller = new ContactController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 80
	});
	
	var newContact = Ti.UI.createButton({
		title: 'Nouveau contact',
		height: 40
	});
	
	var tableData = [];
    
    for (var i=1; i<=20; i++){
      var row = Ti.UI.createTableViewRow({
        className:'forumEvent', // used to improve table performance
        backgroundImage:'/images/logo-okidokid.png',
        rowIndex:i, // custom property, useful for determining the row during events
        height:110
      });
      
      var imageAvatar = Ti.UI.createImageView({
        image: '/android/appicon.png',
        left:10, top:5,
        width:50, height:50
      });
      row.add(imageAvatar);
      
      var labelUserName = Ti.UI.createLabel({
        color:'#576996',
        font:{fontFamily:'Arial', fontSize:26, fontWeight:'bold'},
        text:'Fred Smith ' + i,
        left:70, top: 6,
        width:200, height: 30
      });
      row.add(labelUserName);
      
      tableData.push(row);
    }
    
    var tableView = Ti.UI.createTableView({
      backgroundColor:'white',
      data:tableData
    });
    
    self.add(newContact);
    self.add(tableView);
    
    newContact.addEventListener(function() {
    	var ContactSearchWindow = require('ui/contact/ContactSearchWindow');
    	new ContactSearchWindow(dic).open();
    });
	
	return self;
}

module.exports = ContactListView;