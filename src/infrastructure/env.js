import dotenv from "dotenv";

dotenv.config();

const env = {
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRET: process.env.JWT_SECRET || "",
  APPPORT: parseInt(process.env.PORT || ""),
  
  MAILER_EMAIL: process.env.MAILER_EMAIL || "",
  MAILER_PASS: process.env.MAILER_PASS || "",
  
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || "",
  ADMIN_PASS: process.env.ADMIN_PASS || "",
 
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,

};

export default env;
