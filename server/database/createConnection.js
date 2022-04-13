import { MongoClient } from "mongodb";
import dotenv from "dotenv"
dotenv.config()


const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DB;

const client = await MongoClient.connect(url);
const db = client.db(dbName);



export default{
    users: db.collection("users"),
    items: db.collection("items")
};