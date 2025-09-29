import { v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async () => {

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME||"dyyxsaja2", 
        api_key: process.env.CLOUDINARY_API_KEY||"576542419999311", 
        api_secret: process.env.CLOUDINARY_SECRET_KEY||"8YCyyBCXAITL8KbC3ma0Csc6uV8", 
    });

}

export default connectCloudinary