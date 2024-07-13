import mongoose from "mongoose";

const connectMongoDB = async () => {
      try {
            const conn = await mongoose.connect(process.env.MONGO_URI);
            console.log(`MongoDB connected: ${conn.connection.host}`);
      } catch (error) {
            console.error(`Error connection to mongodb: ${error.message}`);
            process.exit(1);
      }
}

<<<<<<< HEAD
export default connectMongoDB;
=======
export default connectMongoDB;
>>>>>>> 6ac79c57f2d3e774cdb5b23b792ab79bf9ff282c
