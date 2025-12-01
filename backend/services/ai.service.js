import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function askAI(prompt) {
  try {
    const systemMessage = `
You are a strict medical assistant chatbot.

RULES:
- ONLY answer health, symptoms, medicine, mental health, fitness, nutrition, or medical safety questions.
- If anything is NOT health related, reply EXACTLY:
  "I can only help with health-related questions."
- Always stay polite and educational.
- End answers with:
  "This information is for educational purposes only. Please consult a doctor for professional medical advice."
`;

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: prompt }
      ],
      temperature: 0.3
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Groq API Error:", error);
    return "AI service temporarily unavailable.";
  }
}
