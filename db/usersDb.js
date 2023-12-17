import { usersCollection } from "./dbConnect.js";
import createHashAndSalt from "../utils/password/hashPassword.js";

function saveUser({ username, password }) {
    const { salt, hash } = createHashAndSalt(password);

    return usersCollection.insertOne({ username, salt, hash });
}

function getUser(username) {
    return usersCollection.findOne({ username });
}

export { saveUser, getUser }