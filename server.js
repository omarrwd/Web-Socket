const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Server says: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
