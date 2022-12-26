import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-zaKGoFkOJIdwBzhjn9X96CuD",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


export default response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "",
  temperature: 0,
  max_tokens: 60,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
