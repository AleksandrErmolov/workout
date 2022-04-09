import mongoose from 'mongoose'
import { MONGO_URL } from '../../test'

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}
