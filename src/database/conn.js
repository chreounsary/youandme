import mongoose from 'mongoose';

const connectMongo = async () => {
    try{
        const { connection }  = await mongoose.connect('mongodb://127.0.0.1:27017/mongosh?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6')
        if(connection.readyState == 1){
            console.log("Database Connected")
        }
    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;