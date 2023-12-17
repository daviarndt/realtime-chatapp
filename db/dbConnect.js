import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URL);

let usersCollection;

try {
    await client.connect();

    const db = client.db("realtime-chatapp");
    usersCollection = db.collection("users");

    console.log("Database connected...");
} catch (err) {
    console.log(err);
}

export { usersCollection };