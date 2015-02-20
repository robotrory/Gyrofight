# What am I?
GyroFight is a quick and dirty game we made at the SimpleWeb hackathon in 3 hours using the [Pusher](http://pusher.com) realtime API. Players scan special magic QR codes with their devices to connect. Then they battle it out by tilting their devices to move and tapping to shoot. Simple, right?

# To Play
We've got an instance up and running (hopefully) ready to play so head over to [http://smithyproductions.noip.me:7654/](smithyproductions.noip.me:7654) on your dekstop armed with two mobile devices (with [Chrome mobile](https://www.google.co.uk/chrome/browser/mobile/) installed) and hopefully another person - It's a lot more fun when you're not playing yourself. Then brace for some epic gyro fights @#$%^&*!!!

# How it works:
QR codes are generated using [qrcode.js](http://davidshimjs.github.io/qrcodejs/) on the main game page with a unique session id and parameters specifying which player is which. Later each mobile page will send events to the game page, identified by their sessionId and player number.

     qrcode.makeCode("http://smithyproductions.ngrok.com/mobile?sessionNumber=" + sessionNum + "&player=1");
     qrcode.makeCode("http://smithyproductions.ngrok.com/mobile?sessionNumber=" + sessionNum + "&player=2");
Players scan these QR codes with their phone/tablet/phablet which links them to `phone.html`  with the correct parameters. As of right now this only works with Chrome mobile because of all the different standards. #thankshtml5

After clicking to begin, the mobile page takes the page fullscreen to prevent any page rotations while shaking the devices around manically later. This is part of the reason we only support Chrome right now. It took a bit of playing around but

    document.documentElement.webkitRequestFullscreen();
	screen.orientation.lock('landscape-primary');
seemed to do the trick (you can only lock orientation once fullscreen). We had to do this in some sort of UI event listener because of browser restrictions which is why there's that big "Click Me to get started" button.

Once fullscreen we start to send events through Pusher using the unique sessionId to form the private Pusher channel.

    var channel = pusher.subscribe('private-game-id-'+getParameterByName('sessionNumber'));

We had to be careful not to exceed the rate limit for Pusher messages so while we don't limit the sampling rate for the gyroscope events we decided to send to Pusher 10x a second (which is about the upper limit).

    channel.trigger('client-coord-update', 
    { 'x': x,
    'y': y,
    'z': z,
    'touched': touched,
    'player': getParameterByName('player') }
    );

The main game page is subscribed to this private Pusher channel and takes note as each client connects. Once both devices are connected the game begins!

With their devices initially flat in landscape mode, players can tilt up either side to move left or right and click the screen to fire at the other player. We only actually use one of the gyroscope's axis so it works best if you just tilt up one of the ends. Each player has 5 lives and fades out a little more with every hit until they're little more than ghosts. Woooooo...

The game logic and ui is handled in `canvas-code.js` and is a mess but works to a degree. Hey! It was a hackathon!

We love [Node.js](http://nodejs.org/) so we used it and [Express](http://expressjs.com/) to handle requests. `webserver.js` deals with all the routing and the pesky `/pusher/auth` requests that Pusher requires for private channels to function. Luckily they had Node code so we don't really know what goes on but it works! For whatever reason we decided to point `/mobile` -> `phone.html`, but I'm sure no one minds...


# DIY (Deploy It Yourself):
So, you want to run it yourself huh?

1. Change the port number in webserver.js to your port of choice
2. Change the url address in game.html to your web address or `localhost` (with your port appended to the end of the host if you didn't choose 80/8080)
2. (optional) Run ngrok or some similar tunneling tool to make your server visible to the interweb
3. Run `node webserver.js`
4. You're done! Load up your chosen web address and give yourself a non patronising pat on the back.

<br /><br />
Enjoy!

- Ben & Rory


