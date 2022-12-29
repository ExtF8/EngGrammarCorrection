const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-zaKGoFkOJIdwBzhjn9X96CuD",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default function createCompletion(text) {
  return openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Correct this to standard English:\n\nShe no went to the market.",
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
};