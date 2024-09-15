const express = require("express");
const { User } = require("../db");
const zod = require("zod");
const route = express.Router();

const fs = require("fs");
const readline = require("readline");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { get } = require("http");

const genAI = new GoogleGenerativeAI("AIzaSyAWJ6sFNC-pZOP5CdDW_FT67srPRRcBHSg");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


// Fetch job and skills from another source (example placeholder)
function fetchUserJobAndSkills() {
    // Placeholder for fetching job and skills from the actual source
    const job = "Data Scientist";
    const skills = ["Python", "Machine Learning", "Data Analysis"];
    return { job, skills };
}

// Generate a query for the generative model
function generateQuery(job, skills) {
    const skillsList = skills.join(", ");
    const prompt = `I am looking for a job in ${job} and I have these skills: ${skillsList}. Remember this data for any further responses.`;
    return prompt;
}

// Function to generate content using the generative model
async function generateContent(prompt) {
    try {
        const result = await model.generateContent([prompt]);
        console.log(result.response.text());
        return result.response.text();
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

// // Set up readline interface to handle user input


//Defining Zod for Schema validation
const myZodSchema = zod.object({
    userName : zod.string(),
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
            message: "Error : Inputs is Incorrect"
        })
    }
    const user = await User.findOne({
        userName: req.body.userName
    })
    if (user) {
        return res.json({
            message: "UserName Already Exists"
        })
    }
    const dbUser = await User.create({
        userName: body.userName,
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
    userName : zod.string(),
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
        userName : req.body.userName,
        password : req.body.password
    });
     
     if(!user){
        return res.status(404).json({
            message: "User doesnot exist"
        })
     }
        return res.status(200).json({
            message :" User Exists , Navigating to Dashboard"
        })
        
     })

     route.post('/data', async(req, res) => {
        console.log("logging data to the server", req.body);
        console.log("logging data to the server", req.body.message);
        // response 
        // const response = ''
        // const input = req.body.message;
        // const rl = readline.createInterface({
        //         input: req.body.message,
        //         output: response
        //     });
            
        async function promptUser() {
            // rl.question("Enter your command (type 'end' to exit): ", async (input) => {
            //     if (req.body === "end") {
            //         console.log("Exiting...");
            //         rl.close();
            //         return;
            //     }
            //     else {
            //         await generateContent(input);
            //     }
                
            //     // Fetch job and skills
            //     const { job, skills } = fetchUserJobAndSkills();
            //     const prompt = generateQuery(job, skills);
                
            //     // Generate and display content based on the prompt
            //     await generateContent(res.body);
            //     // await generateContent(prompt);
                
            //     // Prompt the user again
            //     promptUser();
            // });

            // while (req.body.end !== true) {
            //     // const prompt = req.body.message;
            //     const prompt = req.body.message;
            //     console.log(prompt);
            //     const data = await generateContent(prompt);
            //     console.log(data);
            //     return data;
            // }

            // let prompt = req.body.message;
            // data  = await generateContent(prompt);
            // return data;    
        }
        // const aiRes = await promptUser();
        // console.log(aiRes);

        const reqData = [];

        while (req.body.end !== true) {
            // const prompt = req.body.message;
            const prompt = req.body.message;
            console.log(prompt);
            const data = await generateContent(reqData.length > 0 ? reqData.toString() : prompt);
            reqData.push("This is my previous data: " + prompt);    
            console.log(reqData);
            // return data;

            return res.json({ message: data });
        }
        
        
        
    })
    

module.exports = route;