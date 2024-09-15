# Install the Google AI Python SDK
# $ pip install google-generativeai

import os
import google.generativeai as genai

# Configure the API key
genai.configure(api_key="AIzaSyAWJ6sFNC-pZOP5CdDW_FT67srPRRcBHSg")

# Create the model
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
    # safety_settings = Adjust safety settings
    # See https://ai.google.dev/gemini-api/docs/safety-settings
)

# Fetch job and skills from another source (example placeholder)
def fetch_user_job_and_skills():
    # Placeholder for fetching job and skills from the actual source
    job = "Data Scientist"
    skills = ["Python", "Machine Learning", "Data Analysis"]
    return job, skills

# Generate the query
def generate_query(job, skills):
    skills_list = ", ".join(skills)
    query = (f"I am a {job} with skills in {skills_list}. "
             "What are the next tech topics I should learn to advance my career? Tell the topics in the same order as i should learn them Only tell headings not details. Make sure the text is not formatted, give simple plain text.")
    return query

# Start a chat session with Gemini
chat_session = model.start_chat(history=[])

# Fetch user job and skills
job, skills = fetch_user_job_and_skills()

# Generate query and send to Gemini
query = generate_query(job, skills)
response = chat_session.send_message(query)

# Print only the topics from the response
# Assume the response contains a list of topics or steps in a structured way
print("Next steps to learn:")
topics = response.text.split('\n')  # Assuming topics are separated by new lines
for topic in topics:
    print(f"- {topic.strip()}")

# Example output processing
# You might need to adjust the parsing based on the actual response format from Gemini