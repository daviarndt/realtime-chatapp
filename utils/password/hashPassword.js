import { randomBytes, scryptSync } from "crypto";

function createHashAndSalt(password) {
    const salt = randomBytes(16).toString("hex");
    const hash = scryptSync(password, salt, 64).toString("hex");

    return { salt, hash }
}

export default createHashAndSalt;