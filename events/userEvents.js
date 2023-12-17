import { saveUser, getUser } from "../db/usersDb.js";

function registerSaveUserEvent(socket, io) {
    socket.on('saveUser', async (data) => {
        const user = await getUser(data.username);

        if (user === null) {
            const resultado = await saveUser(data);

            if (resultado.acknowledged) {
                socket.emit('success_saving_user');
            } else {
                socket.emit('error_saving_user');
            }
        } else {
            socket.emit('userAlreadyExists');
            console.log("User already exists with this username...")
        }
    });
}

export default registerSaveUserEvent;