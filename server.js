const express = require('express');
const socket = require('socket.io');
const port = process.env.PORT || 8080;

// App setup
const app = express();
const server = app.listen(port, function() {
    console.log('listening on port ' + port);
});

// static files 
app.use(express.static('./FrontEnd'));

// socket setup
const io = socket(server);

io.on('connection', function(socket) {
    console.log('Socket connection established');
    // TODO(henxing): Store the socket information in server memory.

    // listen to signup message
    socket.on('signup', function(data) {
        // TODO(henxing):
        // Save the information in database
        // Send home page to the client.
    })
});