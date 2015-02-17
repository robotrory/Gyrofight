// QR Code goes here
		function generateQR(qrDivName,urlToEncode){
			alert(urlToEncode);
			var qrcode = new QRCode(document.getElementById("qrcode1"), {
			width : 100,
			height : 100
			});
			qrcode.makeCode(urlToEncode);
		
		}
		var sessionNum = Math.floor(Math.random() * 100000);
		//var x1 = generateQR("qrcode1", "https://smithyproductions.ngrok.com/mobile?sessionNumber=" + sessionNum + "&player=1");
		//var y1 = generateQR("qrcode2", "https://smithyproductions.ngrok.com/mobile?sessionNumber=" + sessionNum + "&player=2");
  		var qrcode = new QRCode(document.getElementById("qrcode1"), {
			width : 100,
			height : 100
			});
			qrcode.makeCode("https://smithyproductions.ngrok.com/mobile?sessionNumber=" + sessionNum + "&player=2");
		// Load in player Images
    var pusher = new Pusher('bf741a8a4c211bec9b6b');
	var channel = pusher.subscribe('private-channel');

    channel.bind('client-coord-update',function(data) {
    //do something soon
		var player = new Image();
		player.src = "img/mainplayer.png";
		
		var otherPlayer = new Image();
		otherPlayer.src = "img/target_standing.png";
  	});

        // Canvas code goes here
        var drawCanvas = function(){
			var c = document.getElementById("main");
			c.width = window.innerWidth;
			c.height = window.innerHeight;
			
			var ctx = c.getContext("2d");
			
			// Add in x and y values for other player here
			var initY = window.innerHeight - 100 - 140;
			
			
			
			// Draw images
			ctx.drawImage(player,0,window.innerHeight - 100,140,100);
			ctx.drawImage(otherPlayer,0,initY,47,132)
				
		}
		setInterval(drawCanvas, 20);
    	