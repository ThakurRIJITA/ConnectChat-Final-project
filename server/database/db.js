import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const userName = process.env.DB_USERNAME;
const passWord = process.env.DB_PASSWORD;
const connection = async () =>{
    const URL = `mongodb://${userName}:${passWord}@ac-fahv0sc-shard-00-00.5yomzis.mongodb.net:27017,ac-fahv0sc-shard-00-01.5yomzis.mongodb.net:27017,ac-fahv0sc-shard-00-02.5yomzis.mongodb.net:27017/?ssl=true&replicaSet=atlas-oehopp-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: tru});
        console.log("Db connected");
    }catch(error){
        console.info("Error Found!",error.message);
    }
}
export default Connection;