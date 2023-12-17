import "dotenv/config";
import registerSaveUserEvent from "../events/userEvents.js";
import io from "./server.js";

io.on("connection", (socket) => {
    console.log(`User ${socket.id} connected...`);

    socket.on('disconnect', () => {
        console.log(`User ${socket.id} disconnected...`)
    });

    registerSaveUserEvent(socket, io);
});