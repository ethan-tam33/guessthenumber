import OpenAI from "openai";

// const openai = new OpenAI({apiKey: process.env.REACT_APP_OPENAI_API_KEY});

// const messages = [{role: "system", content: "You are a helpful assistant."},
//                   {role: "user", content: "Please answer only Yes or No to all questions."}]

// async function askChatGPT(messages, input, model="gpt-3.5-turbo") {
//   messages.push({role: "user", content: input})
//   const completion = await openai.chat.completions.create({
//       messages: messages,
//       model: model,
//     });
//   const output = completion.choices[0].message.content;
//   messages.push({role: "assistant", content: output})
//   return output;
// }

// function chatGPT(number, question) {
//   askChatGPT(messages, number + " " + question)
//   .then((result) => {
//     return result;
//   })
//   .catch((error) => {
//     console.log(error);
//   })          
// }

// // askChatGPT(messages, number + "Is the number 1?")
// //   .then((result) => {
// //     const output = result;
// //     console.log(output)
// //     console.log(messages)
// //   })
// //   .catch((error) => {
// //     const output = "Output error.";
// //     console.log(output);
// //   })

// export default chatGPT;