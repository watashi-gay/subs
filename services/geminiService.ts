
import { GoogleGenAI, Type } from "@google/genai";
import { Product, OutfitSuggestion } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function getOutfitSuggestion(
  prompt: string,
  products: Product[]
): Promise<OutfitSuggestion> {
  try {
    const simplifiedProducts = products.map(({ id, name, category, description }) => ({
      id,
      name,
      category,
      description,
    }));

    const fullPrompt = `Based on the following user request and the available products, create a stylish outfit.
    
    User Request: "${prompt}"
    
    Available Products:
    ${JSON.stringify(simplifiedProducts, null, 2)}
    
    Please provide a brief, friendly explanation for your outfit choice and a list of the product IDs that make up the outfit.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: fullPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestionText: {
              type: Type.STRING,
              description: "A friendly and stylish explanation for the outfit choice.",
            },
            productIds: {
              type: Type.ARRAY,
              items: {
                type: Type.NUMBER,
                description: "The ID of a product to include in the outfit.",
              },
            },
          },
          required: ["suggestionText", "productIds"],
        },
      },
    });

    const jsonText = response.text.trim();
    const suggestion: OutfitSuggestion = JSON.parse(jsonText);
    
    // Validate that productIds exist in the original product list
    suggestion.productIds = suggestion.productIds.filter(id => products.some(p => p.id === id));
    
    return suggestion;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error(
      "Sorry, the AI stylist is taking a quick break. Please try again in a moment."
    );
  }
}
