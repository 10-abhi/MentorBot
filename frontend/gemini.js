import axios from "axios";

// const axios = require('axios');

// Configure the API key
const apiKey = "AIzaSyAWJ6sFNC-pZOP5CdDW_FT67srPRRcBHSg";

// Define the generation configuration
const generationConfig = {
    temperature: 1,
    top_p: 0.95,
    top_k: 64,
    max_output_tokens: 8192,
    response_mime_type: "text/plain",
};

// Fetch job and skills from another source (example placeholder)
function fetchUserJobAndSkills() {
    // Placeholder for fetching job and skills from the actual source
    const job = "Data Scientist";
    const skills = ["Python", "Machine Learning", "Data Analysis"];
    return { job, skills };
}

// Generate the query
function generateQuery(job, skills) {
    const skillsList = skills.join(", ");
    const query = `I am a ${job} with skills in ${skillsList}. What are the next tech topics I should learn to advance my career? Tell the topics in the same order as I should learn them. Only tell headings not details. Make sure the text is not formatted, give simple plain text.`;
    return query;
}

// Start a chat session with Gemini
async function startChatSession(query) {
    try {
        const response = await axios.post(
            'https://api.example.com/gemini', // Replace with the actual endpoint URL
            {
                model_name: "gemini-1.5-flash",
                generation_config: generationConfig,
                query: query
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error starting chat session:', error);
        throw error;
    }
}

// Main function to handle the workflow
async function main() {
    const { job, skills } = fetchUserJobAndSkills();
    const query = generateQuery(job, skills);

    try {
        const response = await startChatSession(query);
        
        // Print only the topics from the response
        console.log("Next steps to learn:");
        const topics = response.text.split('\n'); // Assuming topics are separated by new lines
        topics.forEach(topic => {
            console.log(`- ${topic.trim()}`);
        });
    } catch (error) {
        console.error('Error processing the response:', error);
    }
}

main();
