
// const fs = require("fs");

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI("AIzaSyAWJ6sFNC-pZOP5CdDW_FT67srPRRcBHSg");

// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // Fetch job and skills from another source (example placeholder)
// function fetchUserJobAndSkills() {
//     // Placeholder for fetching job and skills from the actual source
//     const job = "Data Scientist";
//     const skills = ["Python", "Machine Learning", "Data Analysis"];
//     return { job, skills };
// }

// // const prompt = `I am a ${job} with skills in ${skillsList}. What are the next tech topics I should learn to advance my career? Tell the topics in the same order as I should learn them. Only tell headings not details. Make sure the text is not formatted, give simple plain text.`;
// function generateQuery(job, skills) {
//     const skillsList = skills.join(", ");
//     const prompt = `I am looking for a job in ${job} and i have these skills : ${skillsList}. Remember this data for any further responses.`;
//     return prompt;
// }

// const prompt = generateQuery(fetchUserJobAndSkills().job, fetchUserJobAndSkills().skills);
// // const image = {
// //   inlineData: {
// //     data: Buffer.from(fs.readFileSync("cookie.png")).toString("base64"),
// //     mimeType: "image/png",
// //   },
// // };

// async function generateContent([prompt]) {
//     const result = await model.generateContent([prompt]);
//     console.log(result.response.text());
//     }

// // const result = await model.generateContent([prompt, image]);
// // console.log(result.response.text());
// generateContent([prompt]);

const fs = require("fs");
const readline = require("readline");
const { GoogleGenerativeAI } = require("@google/generative-ai");

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
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

// Set up readline interface to handle user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt the user for input and process it
function promptUser() {
    rl.question("Enter your command (type 'end' to exit): ", async (input) => {
        
        // Fetch job and skills
        const { job, skills } = fetchUserJobAndSkills();
        const prompt = generateQuery(job, skills);
        
        // Generate and display content based on the prompt
        await generateContent(prompt);
        
        // Prompt the user again
        if (input.toLowerCase() === "end") {
            console.log("Exiting...");
            rl.close();
            return;
        }
        else {
            await generateContent(input);
        }
        promptUser();
    });
}

// Start the user prompt loop
promptUser();
