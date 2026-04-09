import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("conexion a mongodb exitosa");
  }catch (error){
    console.error("error al conectarse", error);
    process.exit(1);
  }
}
export default conectDB;