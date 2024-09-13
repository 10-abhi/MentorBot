const express = require("express");
const { User } = require("../db");
const zod = require("zod");
const route = express.Router();

//Defining Zod for Schema validation
const myZodSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
});

route.post("/signup", async (req, res) => {
    //Taking the inputs from the user
    const body = req.body;

    const { success } = myZodSchema.safeParse(body);
    if (!success) {
        return res.status(411).json({
            message: "Input Error Occured , Inputs is Incorrect"
        })
    }
    const user = await User.findOne({
        username: req.body.username
    })
    if (user) {
        return res.json({
            message: "Username Already Exists"
        })
    }
    const dbUser = await User.create({
        username: body.username,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName,
    })
    if (!dbUser) {
        res.json({
            message: "Error while creating User"
        })
    }

    res.json({
        message: "User create successfully",
    })
});

const signinZodSchema = zod.object({
    email : zod.string(),
    password : zod.string()
   })

    route.post("/signin" , async (req , res)=>{
     const body = req.body;
     const {success} = signinZodSchema.safeParse(body);
     if(!success){
      return res.json({
         message : "Incorrect Input"
      })
     }
     const user = await User.findOne({
        username : req.body.username,
        password : req.body.password
    });
     
     if(!user){
        return res.status(404).json({
            message: "User doesnot exist"
        })
     }
        return res.status(200).json({
            message :" User Exists "
        })
        
     })

module.exports = route;