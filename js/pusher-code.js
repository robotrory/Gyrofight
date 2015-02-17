
		// Load in player Images
    var pusher = new Pusher('bf741a8a4c211bec9b6b');
	var channel = pusher.subscribe('private-channel');

    channel.bind('client-coord-update',function(data) {
    //do something soon
		
  	});

        
    	