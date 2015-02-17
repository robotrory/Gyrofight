var express = require( 'express' );
var Pusher = require( 'pusher' );

var app = express( express.logger() );
app.use( express.bodyParser() );

var pusher = new Pusher( { appId: '107012', key: 'bf741a8a4c211bec9b6b', secret: '4fe4169269b1c8746e84' } );

app.post( '/pusher/auth', function( req, res ) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = pusher.authenticate( socketId, channel );
  res.send( auth );
} );

var port = 8080;
app.listen( port );