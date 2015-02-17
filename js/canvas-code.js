// Canvas code goes here

		var player = new Image();
		player.src = "img/mainplayer.png";
		
		var otherPlayer = new Image();
		otherPlayer.src = "img/target_standing.png";

        var drawCanvas = function(){
			var c = document.getElementById("main");
			c.width = window.innerWidth;
			c.height = window.innerHeight;
			
			var ctx = c.getContext("2d");
			
			// Add in x and y values for other player here
			var initY = window.innerHeight - 100 - 140;
			

			
			
			// Draw images

			//palyer 1
			ctx.drawImage(player,c.width * (player1.y/100),window.innerHeight - 100,140,100);

			//player 2
			ctx.drawImage(otherPlayer,c.width * (player2.y/100),initY,47,132)
				
		}
		setInterval(drawCanvas, 1000);