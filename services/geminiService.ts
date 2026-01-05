
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBotanistAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are a professional, friendly botanist at Verdant Haven Nursery. 
        Your goal is to help customers choose the right plants and give them expert care advice. 
        Keep your responses concise, encouraging, and informative. 
        If asked about specific plants, you can mention common nursery stock like Monstera, Snake Plants, Fiddle Leaf Figs, or Succulents.
        Always maintain a green-thumb, eco-conscious persona.`,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Could you tell me more about your space and light levels?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The garden seems a bit quiet right now. Please try again in a moment!";
  }
};
