// import OpenAI from "openai";

// const openaiApiKey = process.env.OPENAI_API_KEY;
// const openai = new OpenAI({apiKey : openaiApiKey});

// async function askChatGPT(input) {
//     const completion = await openai.chat.completions.create({
//         messages: [{ role: "system", content: input }],
//         model: "gpt-3.5-turbo",
//       });

//     return completion[0];
// }

function submitForm(questions, setQuestions, number) {
    setQuestions(questions + 1)


    // get user input
    const userInput = document.getElementById('userInput').value;
    console.log(typeof(userInput))

    // check if user found the correct number
    if (userInput.includes(' ' + number)) {
        console.log('yay!!')
    }

    // send user input to chatgpt
    // const chatGPTOutput = askChatGPT(userInput);


    console.log(userInput)

}

export default submitForm