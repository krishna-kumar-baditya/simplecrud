const mongoose = require('mongoose')
class connectDB {
    async connection(){
        try {
            await mongoose.connect(process.env.MONGO_URI)
            console.log('Database connect successfully');
            
        } catch (error) {
            throw error
        }
    }
}
module.exports = new connectDB()