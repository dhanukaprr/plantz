
import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

const getAI = () => {
  if (!aiInstance) {
    // Standard approach to access the API_KEY provided by the environment
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API_KEY is not defined in process.env");
    }
    aiInstance = new GoogleGenAI({ apiKey: apiKey || '' });
  }
  return aiInstance;
};

export const getBotanistAdvice = async (userQuery: string): Promise<string> => {
  try {
    const ai = getAI();
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
