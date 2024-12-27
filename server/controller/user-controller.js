import User from "../models/User.js";
import jwt from 'jsonwebtoken';

const maxAge=3*24*60*60*1000;

const createToken = (email, sub) => {
    try {
       const token=jwt.sign({ email, sub }, process.env.JWT_KEY, { expiresIn: maxAge });
       
       return token;
    } catch (error) {
      console.error("JWT creation failed:", error);
      throw new Error("JWT creation failed");
    }
  };


export const addUser = async (request,response) => {
    try {
        let exist = await User.findOne({ sub: request.body.sub });
        const { email, sub } = request.body;
        
        if(exist) {
            response.status(200).json('user already exists');
            return;
        }

        const newUser = new User(request.body);
        await newUser.save();
         
        
        response.cookie("jwt",createToken(email,sub),{
            httpOnly: true,
            maxAge,
            secure:true,
            sameSite:"None",
         });
        return response.status(200).json(newUser);
       
    } catch (error) {
        response.status(500).json(error);
    }
}

/*export const getUser = async (request, response) => {
    try {
        const user = await User.find({});
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json(error);
    }
}*/