const net = require('net');

// Connect to the server on port 8080
const client = net.connect({ port: 8080 }, () => {
    console.log('Connected to server');
    
    // Write data to the server
    client.write('Hello, Server!');
    
    // End the connection
    client.end();
});

// Handle data from the server
client.on('data', (data) => {
    console.log('Received from server:', data.toString());
});

// Handle error
client.on('error', (err) => {
    console.log('Error:', err.message);
});

// Handle the end of the connection
client.on('end', () => {
    console.log('Disconnected from server');
});
