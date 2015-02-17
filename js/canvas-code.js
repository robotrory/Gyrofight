// Canvas code goes here

		var player1Image = new Image();
		player1Image.src = "img/mainplayer.png";
		
		var player2Image = new Image();
		player2Image.src = "img/target_standing.png";

		var bulletRadius = window.innerHeight/100;
		var bulletRange = window.innerHeight/5;
		var bulletSpeed = 3;

		var playerWin = function (player) {

			if(player == player1){
				$('#winner').text("Player 1");
			}else{
				$('#winner').text("Player 2");
			}

			$('.gameOver').fadeIn();

		}

        var drawCanvas = function(){
			var c = document.getElementById("main");
			c.width = window.innerWidth;
			c.height = window.innerHeight;
			
			var ctx = c.getContext("2d");
			
			// Draw images

			var player1x = c.width * (player1.x/100);
			var player1y = window.innerHeight - 100;
			var player2x = c.width * (player2.x/100);
			var player2y = window.innerHeight - 100 - 140;
			var player1ImageWidth = 140;
			var player1ImageHeight = 100;
			var player2ImageWidth = 47;
			var player2ImageHeight = 132;

			

			//add any necessary bullets
			if(player1.shouldShoot){
				player1.bullets.push({'x':player1x+player1ImageWidth/2-bulletRadius/2,'y':player1y+bulletRadius});
				player1.shouldShoot = false;
			}

			if(player2.shouldShoot){
				player2.bullets.push({'x':player2x+player2ImageWidth/2-bulletRadius/2,'y':player2y+bulletRadius});
				player2.shouldShoot = false;
			}

			//increment any bullets and check for hits/or misses
			var player1TempBullets = [];
			for(var i=0; i<player1.bullets.length; i++){
				player1.bullets[i].y -= bulletSpeed;

				if(player1.bullets[i].y > player2y && player1.bullets[i].y < (player2y + player2ImageHeight)
					&& player1.bullets[i].x > player2x && player1.bullets[i].x < (player2x + player2ImageWidth)){
					//hit
					player2.lives --;
					console.log("player 2 hit!");
				}else if(Math.abs(player1y -player1.bullets[i].y) < Math.abs((player1y+player1ImageHeight)-player2y)){
					player1TempBullets.push(player1.bullets[i]);
				}
			}
			player1.bullets = player1TempBullets;

			var player2TempBullets = [];
			for(var i=0; i<player2.bullets.length; i++){
				player2.bullets[i].y += bulletSpeed;

				if(player2.bullets[i].y > player1y && player2.bullets[i].y < (player1y + player1ImageHeight)
					&& player2.bullets[i].x > player1x && player2.bullets[i].x < (player1x + player1ImageWidth)){
					//hit
					player1.lives --;
					console.log("player 1 hit!");
				}else if(Math.abs(player2y -player2.bullets[i].y) < Math.abs((player1y+player1ImageHeight)-player2y)){
					player2TempBullets.push(player2.bullets[i]);
				}
			}
			player2.bullets = player2TempBullets;


			//player 1
			ctx.globalAlpha = player1.lives/5;
			ctx.drawImage(player1Image,player1x,player1y,player1ImageWidth,player1ImageHeight);

			//player 2
			ctx.globalAlpha = player2.lives/5;
			ctx.drawImage(player2Image,player2x,player2y,player2ImageWidth,player2ImageHeight);

			ctx.globalAlpha = 1.0;


      		ctx.fillStyle = 'green';
      		ctx.lineWidth = 5;
      		ctx.strokeStyle = '#003300';

			
			if(player1.lives > 0){

			//now we can draw any bullets we have
			for(var i=0; i<player1.bullets.length; i++){
				ctx.beginPath();
      			ctx.arc(player1.bullets[i].x, player1.bullets[i].y, bulletRadius, 0, 2 * Math.PI, false);
      			ctx.fill();
      			ctx.stroke();
			}

			}else{
				playerWin(2);
			}

			if(player1.lives > 0){

			for(var i=0; i<player2.bullets.length; i++){
				ctx.beginPath();
      			ctx.arc(player2.bullets[i].x, player2.bullets[i].y, bulletRadius, 0, 2 * Math.PI, false);
      			ctx.fill();
      			ctx.stroke();
			}

			}else{
				playerWin(1);
			}

				
		}
		setInterval(drawCanvas, 20);			
			
