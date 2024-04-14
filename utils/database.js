import { Mongoose } from "mongoose";

let isConnected = false //track connection

export const connectToDB = async () => {
    Mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('mongoDB is already connected')
        return;
    }

    try {
        await Mongoose.connect(process.env,MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
    //     console.log('mongoDB connected')
    } catch (error) {
    //     console.log(error)
        
    }
}