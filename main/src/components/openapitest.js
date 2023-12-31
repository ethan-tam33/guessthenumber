import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Is 1+1=2? Answer only with just yes or no." }],
    model: "gpt-3.5-turbo",
  });
  const output = completion.choices[0]
  console.log(output);
  console.log(output.message.content)
}



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

// console.log(askChatGPT("Pick a random number from 1 to 3."))
// console.log(askChatGPT("Is the number 1?"))
// console.log(askChatGPT("Is the number 2?"))
// console.log(askChatGPT("Is the number 3?"))

const number = Math.floor(Math.random() * 100);

const messages = [{role: "system", content: "You are a helpful assistant."},
                  {role: "user", content: "Remember the number " + number + ". Can you only answer Yes/No to questions trying to guess this number?"}]

// askChatGPT(messages, "Is the number 1?")
//   .then((result) => {
//     const output = result;
//     console.log(output)
//     console.log(messages)
//   })
//   .catch((error) => {
//     const output = "Output error.";
//     console.log(output);
//   })

askChatGPT(messages, "Is the number " + number + " ?")
  .then((result) => {
    const output = result;
    console.log(output)
    console.log(messages)
  })
  .catch((error) => {
    // const output = "Output error.";
    console.log(error);
  })

// askChatGPT(messages, "Is the number 3?")
//   .then((result) => {
//     const output = result;
//     console.log(output)
//     console.log(messages)
//   })
//   .catch((error) => {
//     // const output = "Output error: ";
//     console.log(error);
//   })

// main();