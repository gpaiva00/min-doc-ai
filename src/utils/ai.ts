import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { SYSTEM_PROMPT } from "../constants/index.ts";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.OPENAI_API_KEY,
});

export function createPromptAbility(system: string) {
  async function getResult(prompt: string) {
    const result = await generateText({
      model: groq("llama3-8b-8192"),
      system,
      prompt,
    });

    return result;
  }

  return { getResult };
}

export async function getPromptResult(prompt: string) {
  const result = await generateText({
    model: groq("llama3-8b-8192"),
    system: SYSTEM_PROMPT,
    prompt,
  });

  return result;
}
