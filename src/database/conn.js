import mongoose from 'mongoose';

const connectMongo = async () => {
    try{

        const { connection }  = await mongoose.connect('mongodb+srv://naja:123@cluster0.i0f2n52.mongodb.net/test')

        if(connection.readyState == 1){
            console.log("Database Connected")
        }

    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;