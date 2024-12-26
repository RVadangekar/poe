const net = require('net'); 
 
const server = net.createServer((socket) => { 
    console.log('Client connected'); 
    socket.write('Hello, client!\n'); 
 
    socket.on('data', (data) => { 
        console.log('Received from client:', data.toString()); 
    }); 
 
    socket.on('end', () => { 
        console.log('Client disconnected'); 
    }); 
}); 
 
server.listen(8080, () => { 
    console.log('Server listening on port 8080'); 
}); 

setTimeout(() => {
    server.close(() => {
        console.log('Server closed');
    });
}, 10000);
 
const client = net.createConnection({ port: 8080 }, () => { 
    console.log('Connected to server'); 
    client.write('Hello, server!'); 
}); 
 
client.on('data', (data) => { 
    console.log('Server says:', data.toString()); 
    client.end(); 
}); 
 
client.on('end', () => { 
    console.log('Disconnected from server'); 
});
