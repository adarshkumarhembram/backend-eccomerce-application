// signUp a new user
import User from "../models/user.schema.js"
import asyncHandler from "../service/asyncHandler";
import customError from "../utils/customError";

export const cookieOptions = {
    expires: new Date(Date.now() +3 * 24 * 60 * 1000 ),
    httpOnly: true
}

export const signUp = asyncHandler(async(req,res) => {
    // get data from user
    const {name, email, passowrd} = req.body

    // validation
    if(!name || !email || !passowrd){
        throw new customError("please add all fields", 400)
        // throw new Error("Got an error") - we are using cutomError
        
    }

    // lets add this data to database

    // check if user already exists
    const existingUser = await User.findOne({email})

    if(existingUser){
        throw customError("User already exists", 400)
    }

    const user = await User.create({
        name,
        email,
        password
    })

    const token = user.getJWTtoken()
    // safety
    user.password = undefined

    // store this token in user's cookie
    res.cookie("token", token, cookieOptions)

    // send back response to user
    res.status(200).json({
        success:true,
        token,
        user,
    })

})