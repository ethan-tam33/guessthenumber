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


// hmm i'd like this function to also allow the text to generate char by char
function showText(output) {
    const hiddenText = document.getElementById('output');
    hiddenText.innerHTML = output;
    hiddenText.style.display = 'block';
}

function addNewQuestion(question, output) {
    const currQuestions = document.getElementById('questions');
    const newQuestion = document.createElement('li');
    newQuestion.textContent = question + " -> " + output;
    currQuestions.appendChild(newQuestion); 
}

function submitForm(questions, setQuestions, number) {
    // get user input
    const userInput = document.getElementById('userInput').value;
    console.log(typeof(userInput))

    // userInput must contain some string
    if (userInput === "") {
        return;
    }


    setQuestions(questions + 1)

    // check if user found the correct number
    if (userInput.includes(' ' + number)) {
        console.log('yay!!')

        // add congratulations sentence like "Congrats, the number was 8! You asked 11 questions."
        // disable the submit button?
    }

    // send user input to chatgpt
    // const chatGPTOutput = askChatGPT(userInput);
    const chatGPTOutput = "Yes."

    // chatGPT output appears onscreen
    // showText(chatGPTOutput)
    showText("helloooooo")



    console.log(userInput)

    // clear textarea once button is clicked
    document.getElementById("userInput").value = "";

    // append new question to questions asked
    addNewQuestion(userInput, chatGPTOutput);

}

export default submitForm