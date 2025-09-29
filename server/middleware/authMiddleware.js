import jwt from 'jsonwebtoken';
import Company from '../models/Company.js';

export const protectCompany = async (req, res, next) => {

    const token = req.headers.token 

    if(!token){
        return res.json({
            success: false,
            message: "Not authorized"})
    }
    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET||"5978613b37929e6687447506e74b1a9ea5b55f317cc544ef6028682780042452")

        req.company =  await Company.findById(decoded.id).select('-password')

        next()

    } catch (error) {
        res.json({
            success: false,
            message: "Not authorized, Login Again"})
    }

}