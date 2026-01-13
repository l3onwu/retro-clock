import type { PresetType } from "@/components/custom/presets/PresetItem";
import { GoogleGenAI, Type } from "@google/genai";

export const generateAITheme = async (prompt: string): Promise<PresetType> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const ai = new GoogleGenAI({
    apiKey: apiKey || "",
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Create a color palette and design for a clock, with this prompt: "${prompt}"`,
    config: {
      systemInstruction:
        "You are a color theory and design expert. Generate a cohesive 3-color palette (Clock body, clock dial, clock hands) in JSON format. After that, choose appropriate models for the design. For the dial, choose between 'Classic' and 'Smile'. For the hands, choose between 'Chopsticks' and 'Bold'. Respond only in JSON format as specified.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          bodyColor: { type: Type.STRING },
          dialColor: { type: Type.STRING },
          handsColor: { type: Type.STRING },
          dialDesign: { type: Type.STRING },
          handsDesign: { type: Type.STRING },
        },
        required: [
          "name",
          "bodyColor",
          "dialColor",
          "handsColor",
          "dialDesign",
          "handsDesign",
        ],
      },
    },
  });

  const text = response.text;
  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  try {
    return JSON.parse(text) as PresetType;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    console.error("Failed to parse Gemini response as JSON:", text);
    throw new Error("Invalid response format from AI.");
  }
};
