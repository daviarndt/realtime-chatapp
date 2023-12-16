const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});