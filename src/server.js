import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

import "./../db/dbConnect.js"

const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

app.get('/', (req, res) => {
   res.send('<h1>Hello, world!</h1>');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const io = new Server(server);

export default io;