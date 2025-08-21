import OpenAI from "openai";
import { OPENAI_KEY } from "./constant";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  baseURL: "https://api.together.xyz/v1", // important!
  dangerouslyAllowBrowser: true
});

export default openai
