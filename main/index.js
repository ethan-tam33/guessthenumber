const PORT = 8000;
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import OpenAI from "openai";

const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(cors());

const openai = new OpenAI({apiKey: process.env.REACT_APP_OPENAI_API_KEY});

async function askChatGPT(messages, input, model="gpt-3.5-turbo") {
    messages.push({role: "user", content: input})
    const completion = await openai.chat.completions.create({
        messages: messages,
        model: model,
      });
    const output = completion.choices[0].message.content;
    messages.push({role: "assistant", content: output})
    return output;
  }

app.get('/gpt', (req,res) => {
    const number = req.query.number;
    const question = req.query.userInput;
    const messages = [{role: "system", content: "You are a helpful assistant."},
                      {role: "user", content: "Please answer only Yes or No to all questions."}]

    askChatGPT(messages, number + " " + question)
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        console.log(error);
    })    
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));