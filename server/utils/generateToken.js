import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET||"5978613b37929e6687447506e74b1a9ea5b55f317cc544ef6028682780042452",
        {expiresIn:"30d"

    });

}
export default generateToken;